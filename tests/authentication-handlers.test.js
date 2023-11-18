// Import necessary modules and functions
const mysql = require("mysql2");
const { login } = require("../scripts/authentication-handlers");

// Mock the mysql2 createConnection function
jest.mock("mysql2", () => ({
  createConnection: jest.fn(),
}));

// Test suite for the login function
describe("login Function", () => {
  // Reset the mock before each test
  beforeEach(() => {
    mysql.createConnection.mockClear(); // Clear all instances and calls to constructor and all methods
  });

  // Test case for successful login
  test("should login successfully", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, params, callback) => {
        // Simulate a successful login query result
        callback(null, [{}]);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock request object with necessary data
    const mockRequest = {
      body: {
        login: "mockUser",
        password: "mockPassword",
      },
      session: {},
    };

    // Mock response object with necessary methods
    const mockResponse = {
      sendStatus: jest.fn(),
      send: jest.fn(),
    };

    // Call the login function with the mock objects
    await login(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();
  });

  // Test case for handling login failure
  test("should handle login failure", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, params, callback) => {
        // Simulate an unsuccessful login query result
        callback(500);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock request object with necessary data
    const mockRequest = {
      body: {
        login: "mockUser",
        password: "mockPassword",
      },
      session: {},
    };

    // Mock response object with necessary methods
    const mockResponse = {
      sendStatus: jest.fn(),
      send: jest.fn(),
    };

    // Call the login function with the mock objects
    await login(mockRequest, mockResponse);

    // Verify the expected response
    expect(mockResponse.sendStatus).toHaveBeenCalledWith(500);
  });
});

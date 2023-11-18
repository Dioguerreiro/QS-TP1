const mysql = require("mysql2");
const {
  getClients,
  editClient,
  deleteClient,
  createClient,
} = require("../scripts/clients-handlers");

// Mock the mysql2 createConnection function
jest.mock("mysql2", () => ({
  createConnection: jest.fn(),
}));

// Test suite for the getClients function
describe("getClients Function", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    mysql.createConnection.mockClear();
  });

  // Test case for getting clients successfully
  test("should get clients successfully", async () => {
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, callback) => {
        // Simulate a successful query result
        const mockClientData = [
          {
            id: 1,
            name: "Mock Client 1",
            address: "Mock Address 1",
            postCode: "Mock Postcode 1",
            email: "mockclient1@example.com",
            nif: "123456789",
            TOTAL_JOBS: 5,
            TOTAL_JOBS_FINALISED: 2,
          },
        ];

        callback(null, mockClientData);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    const mockRequest = {};
    const mockResponse = {
      json: jest.fn(),
    };

    // Call the getClients function with the mock objects
    await getClients(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Function)
    );

    // Verify the expected response structure
    expect(mockResponse.json).toHaveBeenCalledWith({
      clients: expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          name: "Mock Client 1",
          address: "Mock Address 1",
          postCode: "Mock Postcode 1",
          email: "mockclient1@example.com",
          nif: "123456789",
          TOTAL_JOBS: 5,
          TOTAL_JOBS_FINALISED: 2,
        }),
      ]),
    });
  });
});

// Test suite for the editClient function
describe("editClient Function", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    mysql.createConnection.mockClear();
  });

  // Test case for editing a client successfully
  test("should edit client successfully", async () => {
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate a successful update
        callback(null);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    const mockRequest = {
      body: {
        name: "Updated Client Name",
        address: "Updated Address",
        postCode: "Updated Postcode",
        email: "updatedclient@example.com",
        nif: "987654321",
        id: 1,
      },
    };
    const mockResponse = {
      json: jest.fn(),
    };

    // Call the editClient function with the mock objects
    await editClient(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      [
        "Updated Client Name",
        "Updated Address",
        "Updated Postcode",
        "updatedclient@example.com",
        "987654321",
        1,
      ],
      expect.any(Function)
    );

    // Verify the expected response
    expect(mockResponse.json).toHaveBeenCalledWith({ success: true });
  });

  // Test case for handling an error during client edit
  test("should handle error during client edit", async () => {
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate an error during the update
        callback(new Error("Update failed"));
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    const mockRequest = {
      body: {},
    };
    const mockResponse = {
      json: jest.fn(),
    };

    // Call the editClient function with the mock objects
    await editClient(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Array),
      expect.any(Function)
    );

    // Verify the expected response in case of an error
    expect(mockResponse.json).toHaveBeenCalledWith({ success: false });
  });
});

// Test suite for the deleteClient function
describe("deleteClient Function", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    mysql.createConnection.mockClear();
  });

  // Test case for deleting a client successfully
  test("should delete client successfully", async () => {
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate a successful deletion
        callback(null);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    const mockRequest = {
      params: {
        id: 1,
      },
    };
    const mockResponse = {
      sendStatus: jest.fn(),
    };

    // Call the deleteClient function with the mock objects
    await deleteClient(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      [1],
      expect.any(Function)
    );

    // Verify the expected response
    expect(mockResponse.sendStatus).toHaveBeenCalledWith(200);
  });

  // Test case for handling an error during client deletion
  test("should handle error during client deletion", async () => {
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate an error during the deletion
        callback(new Error("Deletion failed"));
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    const mockRequest = {
      params: {
        id: 1,
      },
    };
    const mockResponse = {
      sendStatus: jest.fn(),
    };

    // Call the deleteClient function with the mock objects
    await deleteClient(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      [1],
      expect.any(Function)
    );

    // Verify the expected response in case of an error
    expect(mockResponse.sendStatus).toHaveBeenCalledWith(500);
  });
});

// Test suite for the createClient function
describe("createClient Function", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    mysql.createConnection.mockClear();
  });

  // Test case for creating a client successfully
  test("should create client successfully", async () => {
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate a successful client creation
        callback(null);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    const mockRequest = {
      body: {
        name: "Mock Client",
        address: "Mock Address",
        postCode: "Mock Postcode",
        email: "mockclient@example.com",
        nif: "123456789",
      },
    };
    const mockResponse = {
      sendStatus: jest.fn(),
    };

    // Call the createClient function with the mock objects
    await createClient(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      [
        "Mock Client",
        "Mock Address",
        "Mock Postcode",
        "mockclient@example.com",
        "123456789",
      ],
      expect.any(Function)
    );

    // Verify the expected response
    expect(mockResponse.sendStatus).toHaveBeenCalledWith(200);
  });

  // Test case for handling an error during client creation
  test("should handle error during client creation", async () => {
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate an error during client creation
        callback(new Error("Creation failed"));
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    const mockRequest = {
      body: {},
    };
    const mockResponse = {
      sendStatus: jest.fn(),
    };

    // Call the createClient function with the mock objects
    await createClient(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Array),
      expect.any(Function)
    );

    // Verify the expected response in case of an error
    expect(mockResponse.sendStatus).toHaveBeenCalledWith(500);
  });
});

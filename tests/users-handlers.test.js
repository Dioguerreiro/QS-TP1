// Import necessary modules and functions
const mysql = require("mysql2");
const {
  getUsers,
  createUser,
  editUser,
  deleteUser,
  getPageSettings,
} = require("../scripts/users-handlers");

// Mocking mysql2 module
jest.mock("mysql2", () => ({
  createConnection: jest.fn(() => ({
    connect: jest.fn(),
    query: jest.fn(),
  })),
}));

// Test suite for the getUsers function
describe("getUsers Function", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    mysql.createConnection.mockClear();
  });

  // Test case for getting users successfully
  test("should get users successfully", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, callback) => {
        // Simulate a successful query result
        const mockUserData = [
          {
            id: 1,
            userName: "user1",
            name: "User 1",
            email: "user1@example.com",
            roleCode: "ADMIN",
            roleDescription: "Administrator",
            TOTAL_JOBS: 5,
          },
        ];

        callback(null, mockUserData);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock request object with necessary data
    const mockRequest = {};
    // Mock response object with necessary methods
    const mockResponse = {
      json: jest.fn(),
    };

    // Call the getUsers function with the mock objects
    await getUsers(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Function)
    );

    // Verify the expected response structure
    expect(mockResponse.json).toHaveBeenCalledWith({
      users: expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          userName: "user1",
          name: "User 1",
          email: "user1@example.com",
          roleCode: "ADMIN",
          roleDescription: "Administrator",
          TOTAL_JOBS: 5,
        }),
      ]),
    });
  });
});

// Test suite for the createUser function
describe("createUser Function", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    mysql.createConnection.mockClear();
  });

  // Test case for creating a user successfully
  test("should create a user successfully", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate a successful query result
        callback(null);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock request object with necessary data
    const mockRequest = {
      body: {
        name: "John Doe",
        userName: "johndoe",
        email: "johndoe@example.com",
        password: "password123",
        role: "user",
      },
    };
    // Mock response object with necessary methods
    const mockResponse = {
      sendStatus: jest.fn(),
    };

    // Call the createUser function with the mock objects
    await createUser(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      ["John Doe", "johndoe", "johndoe@example.com", "password123", "user"],
      expect.any(Function)
    );

    // Verify that sendStatus(200) was called on successful creation
    expect(mockResponse.sendStatus).toHaveBeenCalledWith(200);
  });

  // Test case for handling an error during user creation
  test("should handle error during user creation", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate an error during the query
        callback(new Error("Mock error"));
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock request object with necessary data
    const mockRequest = {
      body: {},
    };
    // Mock response object with necessary methods
    const mockResponse = {
      sendStatus: jest.fn(),
    };

    // Call the createUser function with the mock objects
    await createUser(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Array),
      expect.any(Function)
    );

    // Verify that sendStatus(500) was called on error
    expect(mockResponse.sendStatus).toHaveBeenCalledWith(500);
  });
});

// Test suite for the editUser function
describe("editUser Function", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    mysql.createConnection.mockClear();
  });

  // Test case for editing a user successfully
  test("should edit a user successfully", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate a successful query result
        callback(null);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock request object with necessary data
    const mockRequest = {
      body: {
        id: 1,
        name: "Updated Name",
        email: "updated.email@example.com",
        role: "admin",
      },
    };
    // Mock response object with necessary methods
    const mockResponse = {
      json: jest.fn(),
    };

    // Call the editUser function with the mock objects
    await editUser(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      ["Updated Name", "updated.email@example.com", "admin", 1],
      expect.any(Function)
    );

    // Verify that json({ success: true }) was called on successful edit
    expect(mockResponse.json).toHaveBeenCalledWith({ success: true });
  });

  // Test case for handling an error during user edit
  test("should handle error during user edit", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate an error during the query
        callback(new Error("Mock error"));
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock request object with necessary data
    const mockRequest = {
      body: {},
    };
    // Mock response object with necessary methods
    const mockResponse = {
      json: jest.fn(),
    };

    // Call the editUser function with the mock objects
    await editUser(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Array),
      expect.any(Function)
    );

    // Verify that json({ success: false }) was called on error
    expect(mockResponse.json).toHaveBeenCalledWith({ success: false });
  });
});

// Test suite for the deleteUser function
describe("deleteUser Function", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    mysql.createConnection.mockClear();
  });

  // Test case for deleting a user successfully
  test("should delete a user successfully", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate a successful query result
        callback(null);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock request object with necessary data
    const mockRequest = {
      params: {
        id: 1,
      },
    };
    // Mock response object with necessary methods
    const mockResponse = {
      sendStatus: jest.fn(),
    };

    // Call the deleteUser function with the mock objects
    await deleteUser(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      [1],
      expect.any(Function)
    );

    // Verify that sendStatus(200) was called on successful delete
    expect(mockResponse.sendStatus).toHaveBeenCalledWith(200);
  });

  // Test case for handling an error during user deletion
  test("should handle error during user delete", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, values, callback) => {
        // Simulate an error during the query
        callback(new Error("Mock error"));
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock empty request
    const mockRequest = {
      params: {},
    };
    // Mock response object with necessary methods
    const mockResponse = {
      sendStatus: jest.fn(),
    };

    // Call the deleteUser function with the mock objects
    await deleteUser(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Array),
      expect.any(Function)
    );

    // Verify that sendStatus(500) was called on error
    expect(mockResponse.sendStatus).toHaveBeenCalledWith(500);
  });
});

// Test suite for the getPageSettings function
describe("getPageSettings Function", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    mysql.createConnection.mockClear();
  });

  // Test case for getting page settings successfully
  test("should get page settings successfully", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, callback) => {
        // Simulate a successful query result
        const mockSettingsData = [
          {
            code: "USER_ROLE_1",
            description: "User Role 1",
            displayOrder: 1,
          },
          {
            code: "USER_ROLE_2",
            description: "User Role 2",
            displayOrder: 2,
          },
        ];

        callback(null, mockSettingsData);
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock request object with necessary data
    const mockRequest = {};
    // Mock response object with necessary methods
    const mockResponse = {
      json: jest.fn(),
    };

    // Call the getPageSettings function with the mock objects
    await getPageSettings(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.stringContaining(
        "SELECT * FROM CODES WHERE DOMAIN = 'USER_ROLE' ORDER BY DISPLAY_ORDER ASC"
      ),
      expect.any(Function)
    );

    // Verify the expected response structure
    expect(mockResponse.json).toHaveBeenCalledWith({
      pageSettings: [
        expect.arrayContaining([
          expect.objectContaining({
            code: "USER_ROLE_1",
            description: "User Role 1",
            displayOrder: 1,
          }),
          expect.objectContaining({
            code: "USER_ROLE_2",
            description: "User Role 2",
            displayOrder: 2,
          }),
        ]),
      ],
    });
  });

  // Test case for handling an error during query execution
  test("should handle error during query execution", async () => {
    // Mock connection object with necessary methods
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn((query, callback) => {
        // Simulate an error during query execution
        callback(new Error("Mock database error"));
      }),
    };

    // Set the mock connection to be returned when createConnection is called
    mysql.createConnection.mockReturnValue(mockConnection);

    // Mock request object with necessary data
    const mockRequest = {};
    // Mock response object with necessary methods
    const mockResponse = {
      json: jest.fn(),
    };

    // Call the getPageSettings function with the mock objects
    await getPageSettings(mockRequest, mockResponse);

    // Verify that connect was called
    expect(mockConnection.connect).toHaveBeenCalled();

    // Verify that the query method was called with the correct parameters
    expect(mockConnection.query).toHaveBeenCalledWith(
      expect.stringContaining(
        "SELECT * FROM CODES WHERE DOMAIN = 'USER_ROLE' ORDER BY DISPLAY_ORDER ASC"
      ),
      expect.any(Function)
    );

    // Verify that the response reflects the error
    expect(mockResponse.json).toHaveBeenCalledWith({
      pageSettings: [],
    });
  });
});

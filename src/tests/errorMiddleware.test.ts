import { Request, Response, NextFunction } from "express";
import errorMiddleware from "../middlewares/errorMiddleware";

describe("Error Middleware", () => {
  const mockResponse: Partial<Response> = {};
  let mockRequest: Partial<Request>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse.json = jest.fn().mockReturnThis();
    mockResponse.status = jest.fn().mockReturnThis();
  });

  it("should return a 500 error", () => {
    const error = new Error("Test error");
    errorMiddleware(
      error,
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Something went wrong",
      success: false,
    });
  });
});

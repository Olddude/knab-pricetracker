import emailService from "../services/emailService";
import nodemailer from "nodemailer";
import { mocked } from "ts-jest/utils";

jest.mock("nodemailer", () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn(),
  })),
}));

describe("EmailService", () => {
  it("should send email", async () => {
    const mockSendMail = jest.fn();
    mocked(nodemailer.createTransport).mockReturnValue({
      sendMail: mockSendMail,
    });

    await emailService.sendEmail("test@test.com", "Test", "This is a test.");

    expect(mocked(nodemailer.createTransport)).toBeCalled();
    expect(mockSendMail).toBeCalledWith({
      from: process.env.GMAIL_USER,
      to: "test@test.com",
      subject: "Test",
      html: "This is a test.",
    });
  });
});

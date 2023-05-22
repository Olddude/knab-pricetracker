import axios from "axios";
import emailService from "../services/emailService";
import cryptoService from "../services/cryptoService";
import logger from "../utils/logger";

jest.mock("axios");
jest.mock("../services/emailService");
jest.mock("../utils/logger", () => ({
  info: jest.fn(),
  error: jest.fn(),
}));

describe("CryptoService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should send crypto updates", async () => {
    const email = "test@example.com";
    const cryptocurrency = "BTC";

    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: {
        rates: {
          USD: 1,
          EUR: 0.85,
          BRL: 5.37,
          GBP: 0.75,
          AUD: 1.37,
        },
      },
    });

    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          BTC: {
            quote: {
              USD: {
                price: 50000,
              },
            },
          },
        },
      },
    });

    await cryptoService.sendCryptoUpdates(email, cryptocurrency);

    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(emailService.sendEmail).toHaveBeenCalledTimes(1);
  });

  it("should log an error if there is an issue with fetching data", async () => {
    const email = "test@example.com";
    const cryptocurrency = "BTC";

    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("API Error"));

    await cryptoService.sendCryptoUpdates(email, cryptocurrency);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(
      "Failed to fetch data and send email for test@example.com: Error: API Error"
    );
  });
});

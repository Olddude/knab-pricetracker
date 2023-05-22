import axios from "axios";
import emailService from "./emailService";
import cron from "node-cron";
import { format } from "date-fns";
import { ICryptoData, IExchangeRates } from "../types/types";
import logger from "../utils/logger";

class CryptoService {
  async sendCryptoUpdates(email: string, cryptocurrency: string) {
    try {
        const erHeaders = {
          apikey: process.env.EXCHANGE_RATES_API_KEY,
          Accepts: "application/json",
        };
        const { data: exchangeRates } = await axios.get<IExchangeRates>(
          process.env.EXCHANGE_RATES_API!,
          { headers: erHeaders }
        );
        const rates = ["USD", "EUR", "BRL", "GBP", "AUD"];
        const selectedRates = rates.map((rate) => exchangeRates.rates[rate]);

        const cmcHeaders = {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
          Accepts: "application/json",
        };

        const { data: cryptoData } = await axios.get<ICryptoData>(
          `${process.env.COIN_MARKET_CAP_API!}?symbol=${cryptocurrency}`,
          { headers: cmcHeaders }
        );
        const cryptoPriceInUSD =
          cryptoData.data[cryptocurrency].quote.USD.price;

        const cryptoPrices = selectedRates.map((rate, index) => ({
          currency: rates[index],
          price: rate * cryptoPriceInUSD,
        }));

        let emailContent = `<h1>KNAB Crypto Price Tracker</h1><p>The latest quotes for ${cryptocurrency} are:</p><ul>`;
        cryptoPrices.forEach(({ currency, price }) => {
          emailContent += `<li>${currency}: ${price.toFixed(2)}</li>`;
        });
        emailContent += "</ul>";

        await emailService.sendEmail(
          email,
          "KNAB Crypto Pricetracker",
          emailContent
        );

        const timestamp = format(new Date(), "do MMMM yyyy, HH:mm");
        logger.info(`Email sent to ${email} at ${timestamp}`);
      } catch (error) {
        logger.error(
          `Failed to fetch data and send email for ${email}: ${error}`
        );
    }
  }

  async startSendingCryptoUpdates(email: string, cryptocurrency: string) {
    cron.schedule(process.env.CRON_SCHEDULE!, () => {
      this.sendCryptoUpdates(email, cryptocurrency);
    });
  }
      
}

export default new CryptoService();

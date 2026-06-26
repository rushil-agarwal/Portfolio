import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "stratix-trading-engine",
    companyName: "Deterministic Trading Engine",
    type: "Personal",
    category: ["Quant", "Backend", "Data Science"],
    shortDescription:
      "A cryptocurrency trading engine with matching backtesting and paper-trading pipelines implemented on Binance API.",
    githubLink: "https://github.com/rushil-agarwal/Stratix-Trading-Engine",
    techStack: ["Python", "Pandas", "NumPy", "Git"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2026-01-01"),
    companyLogoImg: "/StratixTradingEngine.png",
    pagesInfoArr: [
      {
        title: "Execution Pipeline",
        description:
          "Backtesting and live-testing modes share the same order flow, trade tracking, and performance analysis pipeline.",
        imgArr: ["/StratixTradingEngine.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Stratix is an end-to-end cryptocurrency trading system built to keep backtesting and live paper trading as close as possible.",
        "The engine supports strategy design, historical data ingestion, Binance Testnet execution, order logging, PnL tracking, and performance analysis.",
      ],
      bullets: [
        "Developed a class-based architecture with clear abstractions for swapping strategies.",
        "Implemented a unified execution pipeline across backtesting and paper trading.",
        "Built EMA/MACD signal generation with Binance API order execution and trade tracking.",
        "Added analysis scripts for total trades, total PnL, average PnL, and largest win/loss.",
      ],
    },
  },
  {
    id: "implied-volatility-prediction",
    companyName: "Implied Volatility Prediction",
    type: "Personal",
    category: ["Machine Learning", "Data Science", "Quant"],
    shortDescription:
      "Predicted 10-second-ahead ETH volatility using high-frequency market data, engineered microstructure features, and ensemble models.",
    githubLink: "https://github.com/rushil-agarwal/ImpliedVolatilityPrediction",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-09-01"),
    companyLogoImg: "/VolatilityPrediction.png",
    pagesInfoArr: [
      {
        title: "Feature Engineering",
        description:
          "Built volatility, spread, VWAP, order-flow, return, and cross-asset correlation features for ETH forecasting.",
        imgArr: ["/VolatilityPrediction.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project forecasts short-horizon Ethereum volatility from high-frequency market data.",
        "I cleaned noisy data, engineered 30+ market microstructure features, applied multiple feature-selection methods, and benchmarked deep learning and ensemble models.",
      ],
      bullets: [
        "Predicted 10-second-ahead ETH volatility after handling missing labels, outliers, infinities, and inconsistent data.",
        "Engineered 30+ features including OFI, VWAP, spreads, returns, rolling realized volatility, and BTC/SOL correlations.",
        "Used Lasso, Extra Trees feature importance, and mutual information regression to reduce overfitting.",
        "Benchmarked Random Forest, Extra Trees, LSTM, Bi-LSTM, CNN, and boosting models; ensemble trees achieved the strongest Pearson correlation.",
      ],
    },
  },
  {
    id: "travel-trends",
    companyName: "TravelTrends Hotel Analytics",
    type: "Personal",
    category: ["Data Science", "Machine Learning", "Frontend"],
    shortDescription:
      "Interactive Streamlit dashboard for hotel guest behavior, revenue metrics, segmentation, and occupancy forecasting.",
    githubLink: "https://github.com/rushil-agarwal/TravelTrends",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
      "NetworkX",
      "Matplotlib",
      "Seaborn",
    ],
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-06-01"),
    companyLogoImg: "/TravelTrens.png",
    pagesInfoArr: [
      {
        title: "Analytics Dashboard",
        description:
          "Dashboard for revenue, satisfaction, amenity usage, occupancy forecasting, guest segmentation, and journey analysis.",
        imgArr: ["/TravelTrens.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "TravelTrends analyzes hotel booking data to support decisions around guest experience, revenue, occupancy, and loyalty.",
        "The project combines feature engineering, predictive modeling, clustering, graph analysis, and a Streamlit interface.",
      ],
      bullets: [
        "Built an interactive hotel dashboard to analyze guest behavior and booking patterns.",
        "Trained Random Forest and neural-network models to forecast occupancy and satisfaction scores.",
        "Engineered business metrics including REI, GSI, AUR, and LGS.",
        "Used KMeans clustering for guest segmentation and NetworkX for booking-to-checkout journey analysis.",
      ],
    },
  },
  {
    id: "ra-cryptocurrency-model",
    companyName: "RA Cryptocurrency Model",
    type: "Personal",
    category: ["Algorithms", "Backend"],
    shortDescription:
      "A Java blockchain prototype demonstrating transactions, mining, Merkle trees, hashing, and chain validation.",
    githubLink: "https://github.com/rushil-agarwal/RA_CryptoCurrency_Model",
    techStack: ["Java", "Git"],
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-07-01"),
    companyLogoImg: "/RA_CryptoCurrency.png",
    pagesInfoArr: [
      {
        title: "Blockchain Data Structures",
        description:
          "Prototype covering transaction creation, block mining, Merkle Tree operations, and validation safeguards.",
        imgArr: ["/RA_CryptoCurrency.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project implements a cryptocurrency and blockchain model from core data-structure ideas.",
        "It focuses on transaction lifecycle, block creation, chain validation, and Merkle Tree authentication.",
      ],
      bullets: [
        "Designed methods to initiate and finalize CRF-based transactions.",
        "Mined transactions into a verified linked-list blockchain and simulated 100+ transactions.",
        "Implemented Merkle Tree update, authentication, and insertion operations.",
        "Added validation safeguards against double spending.",
      ],
    },
  },
  {
    id: "summarize-it",
    companyName: "SummarizeIt",
    type: "Personal",
    category: ["Machine Learning", "Data Science"],
    shortDescription:
      "NLP summarization pipeline using Google FLAN-T5, prompt engineering, and multi-shot learning experiments.",
    githubLink: "https://github.com/rushil-agarwal/SummarizeIt",
    techStack: ["Python", "PyTorch", "Jupyter"],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/SummarizeIt.png",
    pagesInfoArr: [
      {
        title: "LLM Summarization",
        description:
          "Conversation summarization pipeline focused on compression, coherence, and hallucination reduction.",
        imgArr: ["/SummarizeIt.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "SummarizeIt explores conversation summarization with transformer-based language models.",
        "The project evaluates prompt engineering and multi-shot prompting strategies to improve summary quality.",
      ],
      bullets: [
        "Built an NLP pipeline that achieved 60% text compression while preserving conversational context.",
        "Experimented with Google FLAN-T5, prompt engineering, and one-shot/two-shot prompting.",
        "Improved output coherence and relevance while reducing hallucination in generated summaries.",
      ],
    },
  },
  {
    id: "smart-date-parser",
    companyName: "Smart Date Parser",
    type: "Personal",
    category: ["Machine Learning", "Data Science"],
    shortDescription:
      "Sequence-to-sequence date parser that converts natural-language date expressions into machine-readable formats.",
    githubLink: "https://github.com/rushil-agarwal/DateParser",
    techStack: ["Python", "TensorFlow", "Keras", "Jupyter"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-03-01"),
    companyLogoImg: "/SmartDateParser.png",
    pagesInfoArr: [
      {
        title: "Attention Model",
        description:
          "LSTM sequence model with attention maps for interpreting human-language date expressions.",
        imgArr: ["/SmartDateParser.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Smart Date Parser converts natural-language date expressions into machine-parsable date formats.",
        "The model was trained on synthetic date expressions and uses attention visualization to inspect model behavior.",
      ],
      bullets: [
        "Generated and trained on 10k+ date-expression sentences.",
        "Implemented a sequence-to-sequence model with LSTM layers and attention.",
        "Reached 89% accuracy and generalized across varied date formats.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

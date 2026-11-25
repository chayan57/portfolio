import mongoose from "mongoose";

const visitSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: "portfolio_total_visits",
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Visit =
  mongoose.models.Visit || mongoose.model("Visit", visitSchema);

export default Visit;
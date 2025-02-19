import { Schema, model } from "mongoose";

const matchMakingSchema = new Schema(
  {
    investorId: {
      type: Schema.Types.ObjectId,
      ref: "InvestorFirm",
    },
    emailQueue: [
      {
        startUpId: {
          type: Schema.Types.ObjectId,
          ref: "StartUp",
        },
        send: {
          primaryEmail: {
            type: Boolean,
            default: false,
          },
          followUpEmail: {
            type: Boolean,
            default: false,
          },
          timeline: [
            {
              type: String,
            },
          ],
          messageIds: [
            {
              type: String,
            },
          ],
          timestamp: [
            {
              type: String,
            }
          ]
        },
        score: {
          type: Number,
          default: 0,
        },

        response: {
          type: Boolean,
          default: false,
        },
        remark: String,
      },
    ],
    lastinitalMail:{
      type:String,
      default:""
    },
   

  },
  { timestamps: true }
);

const MatchMakingModel = model("matchMaking", matchMakingSchema);

export default MatchMakingModel;

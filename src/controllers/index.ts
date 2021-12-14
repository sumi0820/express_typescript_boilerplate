import { RequestHandler } from "express";
// import { ICommit } from './models/commit';
// import { postTweet, makeNewPushMessage } from './services/twitter';
// import { createPush, findPushes } from './services/push';

// export const getPushes: RequestHandler = async (req, res) => {
//   try {
//     const pushes = await findPushes();

//     res.status(200).send({
//       data: pushes,
//     });
//   } catch (e) {
//     console.log(`Error at getPushes controller: ${e}`);
//     res.status(500).send({
//       message: 'Internal server error',
//     });
//   }
// };

export const postTodo: RequestHandler = async (req, res) => {
  // const body = req.body;
  try {
    res.status(200).send({
      message: "Success",
    });
  } catch (e) {
    console.log(`Error at getting Github webhook: ${e}`);
    res.status(500).send({
      message: "Internal server error",
    });
  }
};

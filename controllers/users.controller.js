const axios = require("axios");

exports.getUsers = async (req, res) => {
  try {
    let result = await axios.get(
      "https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json"
    );

    if (!result.data) {
      return res.status(404).json({
        status: "fail",
        message: "Not Found",
      });
    }

    res.status(200).json({
      status: "success",
      data: result.data,
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

exports.getUsersByQuery = (req, res) => {
  console.log(req.query);
  res.send(req.query);
};

exports.getUsersByuuid = async (req, res) => {
  const { uuid } = req.params;

  try {
    let result = await axios.get(
      "https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json"
    );

    let findD = await result.data.data.find((item) => item.login.uuid === uuid);

    if(!findD){
      return res.status(403).json({
        status: "fail",
        message: "Forbidden"
      })
    }

    res.status(200).json({
      status: "success",
      data: findD,
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

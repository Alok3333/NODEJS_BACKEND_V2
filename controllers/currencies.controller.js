const axios = require("axios");

exports.getCurrencies = async (req, res) => {
  const { min_value } = req.query;

  let result = await axios.get(
    "https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/response.json"
  );

  if (min_value) {
    let filterdMinVal = result.data.data.filter(
      (item) => Number(item.min_size) === Number(min_value)
    );
    res.status(200).json({
      status: "success",
      data: filterdMinVal,
    });
  } else {
    res.status(200).send(result.data);
  }
};

exports.getSingleCurrencies = async (req, res) => {
  let { symbol } = req.params;

  try {
    let result = await axios.get(
      "https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/response.json"
    );

    let ans = await result.data.data.find(
      (item) => item.id.toLowerCase() === symbol.toLowerCase()
    );

    if (!ans) {
      return res.status(404).json({ message: "Invalid symbol" });
    }

    res.status(200).json({
      status: "success",
      data: ans,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};

exports.addDomain = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const currentDomain = data.currentDomain;
    const addDomain = data.addDomain;
    console.log(currentDomain);
    console.log(addDomain);
    const combineDomain = currentDomain + "$" + addDomain;
    console.log(combineDomain);
    res.json({
      success: true,
      message: "Domain name has successfully added!",
      data: combineDomain,
    });
  } catch (err) {
    console.log("Error while adding domain: ", err);
    res.json({
      success: false,
      message: "Error while adding domain name",
      error: err,
    });
  }
};

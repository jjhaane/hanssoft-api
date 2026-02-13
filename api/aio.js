module.exports = {
  name: "AIO Downloader",
  desc: "All in one downloader downloader",
  category: "Downloader",
  path: "/download/aio?apikey=&text=",
  async run(req, res) {
    const { apikey, text } = req.query;
    if (!global.apikey.includes(apikey)) return res.json({ status: false, error: 'Apikey invalid' });
    if (!text) return res.json({ status: false, error: 'Missing text' });

    const buffer = await getBuffer(`https://api-faa.my.id/faa/aio?text=${url};
    res.writeHead(200, {
      'Content-Type': 'video/image/gif',
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }
}



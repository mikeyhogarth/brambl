module.exports = (d, ctx) => {
  ctx.moveTo(d.x + 3, d.y);
  ctx.arc(d.x, d.y, 20, 0, 2 * Math.PI);

  // label
  ctx.font = "20px Georgia";
  ctx.fillText(d.id, d.x + 10, d.y + 40);
};

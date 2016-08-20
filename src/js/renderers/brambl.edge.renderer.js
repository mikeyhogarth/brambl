module.exports = (d, ctx) => {
  ctx.moveTo(d.source.x, d.source.y);
  ctx.lineTo(d.target.x, d.target.y);
};

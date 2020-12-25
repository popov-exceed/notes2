const cx = (...classes) => {
  return classes.filter((cl) => !!cl).join(" ");
};

export default { cx };

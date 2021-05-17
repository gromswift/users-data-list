export const filterByName = (query, name) => {
  const q = query.toLowerCase().split(' ');
  const n = name.toLowerCase().split(' ');
  let i;

  if (q.length === 1) {
    return q[0] === n[0].substring(0, q[0].length) || q[0] === n[1].substring(0, q[0].length);
  }

  if (q.length === 2) {
    if (q[0] !== n[0]) {
      if (q[0] !== n[1]) return;
        else { i = 0}
    } else { i = 1}

    return q[i] === n[i].substring(0, q[i].length);
  }

  return null;
}
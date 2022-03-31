const rest = (value, note) => value % note;

const purchaseChange = (purchaseValue, payment) => {
  const changeNote = (note, value) => {
    if (change - rest(note, value) === 0) {
      return 0;
    }
    const notes = (change - rest(value, note)) / note;
    change = change - notes * note;
    return notes;
  };
  let change = payment - purchaseValue;

  return {
    change,
    "notes of 100": changeNote(100, change),
    "notes of 10": changeNote(10, change),
    "notes of 1": changeNote(1, change),
  };
};

export default purchaseChange;

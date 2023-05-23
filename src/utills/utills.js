export const formatDate = (date) => {
    return new Intl.DateTimeFormat('ru', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
}

export const generateCode = (function (start = 0) {
  return () => ++start;
})();
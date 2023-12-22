export default {
  sanitize: (text: string | any): string => {
    if (!text) return '';

    if (typeof text !== 'string') return '';

    return text.replace(/[^a-zA-Z ]/g, '');
  },
  is: {
    string: (text: string | any): boolean => {
      if (!text) return false;
      if (typeof text !== 'string') return false;

      return true;
    }
  }
}
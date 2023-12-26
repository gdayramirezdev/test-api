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
    },
  },
  getJoiDetails: (error: { details: { message: string }[] }): string => {
    if (Array.isArray(error?.details)) {
      const details = error?.details?.map(
        (detail: { message: string }) => detail.message
      );
      return details.join('|');
    } else {
      console.log('getJoiDetails details is not an array');
      return error.details;
    }
  },
};

import moment from 'moment';

const formater = (date: string | Date, format = "DD MMMM YYYY") => {
  return moment(date).format(format);
};

export default { formater };

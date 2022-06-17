import * as yup from 'yup';

export default async (link, feeds) => {
  const urls = feeds.map(({ url }) => url);
  const schema = yup.string().required().url().notOneOf(urls);

  try {
    await schema.validate(link);
    return null;
  } catch (err) {
    return err.message;
  }
};

export const useId = <T>(obj: any): T => {
  if (!obj) return obj;
  const { __v, _id: id, ...rest } = obj;
  return { id, ...rest };
};
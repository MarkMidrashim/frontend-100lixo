import { IPage, ILinks } from '.';
export interface IPaginableAPIModel<T> {
  links: ILinks[];
  content: T[];
  page: IPage;
}

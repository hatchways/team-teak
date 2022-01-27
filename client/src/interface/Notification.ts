export default interface Notification {
  user: string;
  type: string;
  title: string;
  description: string;
  isRead: boolean;
  createdOn: Date;
}

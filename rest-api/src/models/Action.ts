
export default interface action {
  bookId: string;
  state: States;
}

export enum States {
  pending="pending",
  finished="finished"
}

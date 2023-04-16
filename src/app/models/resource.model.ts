export interface ResourceModel {
  readonly id: string;
  readonly name: string;
  readonly state: number;
  readonly minState: number;
  readonly maxState: number;
  readonly imageUrl: string
}

export interface JobModel {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly employeeIds: string[];
  readonly requiredSkills: string[];
}

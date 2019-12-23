export interface Service {
  name: string;
  usage_count: number;
  logo: string;
}

export interface User {
  email: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
}

export interface Approver {
  approver: User;
  status: string;
  last_notified_time: string;
  created_date: string;
  last_updated_date: string;
}

export interface Data {
  service: Service;
  requested_by: User;
  cost: number;
  renewal_frequency_in_months: number;
  spend_limit: number;
  expense_account: string;
  files: string[];
  description: string;
  approvers: Approver[];
}

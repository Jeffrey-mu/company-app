type CountModel = {
  label: string,
  count: number
}[]
export interface AddressModel {
  name: string;
  icon: string;
  company_name: string;
  tel: string;
  details: string;
}
export interface DataModel {
  logo: string;
  score: string;
  company_name: string;
  company_short_describe: string;
  company_content: string;
  hourly_wage: string;
  address: string;
  scale: string;
  creation_time: string;
  company_short_evaluate: string;
  'company_short_evaluate_name(position)': string;
  Certifications: string[];
  address_list: AddressModel[],
  focus_area: {
    service_focus: CountModel;
    client_focus: CountModel;
    industries_focus: CountModel;
  },

}

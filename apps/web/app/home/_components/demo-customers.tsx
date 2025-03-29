import { getSupabaseServerClient } from "@kit/supabase/server-client";
import CustomersTable, { Customer } from "~/home/_components/customers-table";

export default async function Demo() {
  const data = await getCustomers();
  return <CustomersTable data={data} />;
}

export async function getCustomers(): Promise<Customer[]> {
  const client = getSupabaseServerClient();
  const { data, error} = await client.from('customers').select('*');

  if (error) {
    console.error('Get customers error:', error);
    return [];
  }

  return data?.length ? data : [];
}

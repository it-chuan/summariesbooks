import { supabaseClient } from "@/utils/supabase/client";
import { handleError } from "@/utils/util";

export const selectList = async () => {
  const supabase = supabaseClient();
  const { data, error } = await supabase
    .from("book_summary")
    .select("id, book_name, book_author, cover_url")
    .order("create_time", { ascending: true });
  return handleError(data, error);
};

export const selectDetail = async (id) => {
  const supabase = supabaseClient();
  const { data, error } = await supabase
    .from("book_summary")
    .select()
    .eq("id", id)
    .single();
  return handleError(data, error);
};

export const search = async (name) => {
  const supabase = supabaseClient();
  const { data, error } = await supabase
    .from("book_summary")
    .select()
    .ilike("book_name", `%${name}%`)
    .order("create_time", { ascending: true });
  return handleError(data, error);
};

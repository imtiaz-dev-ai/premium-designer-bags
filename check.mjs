import { createClient } from "@supabase/supabase-js";
const sb = createClient(
  "https://scvmpyvznndwvqobxwwe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdm1weXZ6bm5kd3Zxb2J4d3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzMjU0MjIsImV4cCI6MjA5NjkwMTQyMn0.x8_5DIPDx_OzmC3wyhPCmUDjIKqqlVCryETwUSD8iLM"
);
const { data } = await sb.from("products").select("id,title,tag,category").eq("category", "bags");
console.log("BAGS:");
data.forEach(p => console.log(`  id:${p.id} | tag:"${p.tag}" | title:"${p.title}"`));

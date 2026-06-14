import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, statSync } from "fs";
import { join, extname, relative } from "path";

const SUPABASE_URL = "https://scvmpyvznndwvqobxwwe.supabase.co";
const SUPABASE_KEY = "sb_publishable_DC5PWcG_37naZT75zUw_yw_szdVEmEs";
const ASSETS_DIR = "./src/assets";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const IMAGE_EXTS = [".jpeg", ".jpg", ".png", ".jfif", ".webp"];

function getAllImages(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...getAllImages(full));
    } else if (IMAGE_EXTS.includes(extname(full).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

const MIME = {
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".jfif": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

async function upload() {
  const images = getAllImages(ASSETS_DIR);
  console.log(`Found ${images.length} images. Uploading...`);

  let done = 0, failed = 0;

  for (const imgPath of images) {
    const relativePath = relative(ASSETS_DIR, imgPath).replace(/\\/g, "/");
    const file = readFileSync(imgPath);
    const ext = extname(imgPath).toLowerCase();
    const contentType = MIME[ext] ?? "image/jpeg";

    const { error } = await supabase.storage
      .from("products")
      .upload(relativePath, file, { contentType, upsert: true });

    if (error) {
      console.error(`❌ ${relativePath}: ${error.message}`);
      failed++;
    } else {
      console.log(`✅ ${relativePath}`);
      done++;
    }
  }

  console.log(`\nDone! ${done} uploaded, ${failed} failed.`);
}

upload();

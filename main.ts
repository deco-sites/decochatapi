import { Deco as Deco } from "@deco/deco";
import manifest, { Manifest } from "./manifest.gen.ts";
const deco = await Deco.init<Manifest>({
  manifest,
});
const envPort = Deno.env.get("PORT");
Deno.serve({ handler: deco.fetch.bind(deco), port: envPort ? +envPort : 8000 });

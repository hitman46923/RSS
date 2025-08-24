import { z } from "zod";

export const schema = z.object({

});

export type FormData = z.infer<typeof schema>;

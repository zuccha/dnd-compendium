import z from "zod/v4";

//------------------------------------------------------------------------------
// Type
//------------------------------------------------------------------------------

export const viewTypeSchema = z.enum(["cards", "table"]);

export const viewTypes = viewTypeSchema.options;

export type ViewType = z.infer<typeof viewTypeSchema>;

//------------------------------------------------------------------------------
// Sort By
//------------------------------------------------------------------------------

export const viewSortBySchema = z.string();

export type ViewSortBy = z.infer<typeof viewSortBySchema>;

//------------------------------------------------------------------------------
// Sort Order
//------------------------------------------------------------------------------

export const viewSortOrderSchema = z.enum(["asc", "desc"]);

export const viewSortOrders = viewSortOrderSchema.options;

export type ViewSortOrder = z.infer<typeof viewSortOrderSchema>;

//------------------------------------------------------------------------------
// Zoom
//------------------------------------------------------------------------------

export const viewZoomSchema = z.number().min(0);

export type ViewZoom = z.infer<typeof viewZoomSchema>;

//------------------------------------------------------------------------------
// View
//------------------------------------------------------------------------------

export const viewSchema = z.object({
  sortBy: viewSortBySchema.default("name"),
  sortOrder: viewSortOrderSchema.default("asc"),
  type: viewTypeSchema.default("table"),
  zoom: viewZoomSchema.default(1),
});

export type View = z.infer<typeof viewSchema>;

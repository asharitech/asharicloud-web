import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("utils", () => {
  describe("cn", () => {
    it("should merge class names correctly", () => {
      expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
    });

    it("should handle conditional classes", () => {
      expect(cn("text-red-500", false && "text-blue-500")).toBe("text-red-500");
    });

    it("should handle undefined and null", () => {
      expect(cn("text-red-500", undefined, null)).toBe("text-red-500");
    });

    it("should handle empty strings", () => {
      expect(cn("text-red-500", "", "text-blue-500")).toBe("text-blue-500");
    });

    it("should handle arrays", () => {
      expect(cn(["text-red-500", "text-blue-500"])).toBe("text-blue-500");
    });
  });
});

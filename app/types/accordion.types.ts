export type AccordionItemId = string | number;

export interface AccordionItem {
  id: AccordionItemId;
  title: string;
  content: string;
  badge?: string;
  defaultOpen?: boolean;
  disabled?: boolean;
}

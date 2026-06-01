import { useState, useRef, useEffect, Fragment } from "react";
import svgPaths from "../imports/Contains/svg-kuv3qdmzzo";
import imgSg2Pjswl6Kpridi262P91 from "../imports/Contains/04caf03fc5ef6985bc93aea78b28b4b0ec3a567e.png";
import imgUnsplashUnRkg2JH1J1 from "../imports/Contains/8cb58accdf9c179e1ea8d0056e527beca23bb9d1.png";
import imgUnsplash8MikJ83LmSq from "../imports/Contains/bf319886d71e73eaf503ab1091dfd9f774178931.png";
import imgUnsplash774SCxd0DDu from "../imports/Contains/c773d2d5aaeca172ffb73343536ccaee74df979b.png";
import imgUnsplashIrRbSnd5EUc from "../imports/Contains/0e1b66d136362f41fd2b8349dfd50b28e500bc42.png";
import imgUnsplashHpjSkU2Uysu from "../imports/Contains/d4e0c8813ac45c39446cd37b1a706c547c9a4dc3.png";
import imgUnsplash5FNmWej4TAa from "../imports/Contains/fb2f9f4dfe26ce14a8746186d3cd2117cf887ada.png";
import imgUnsplashEveI7MOcSmw from "../imports/Contains/889bd9e8cb3f0dd9a47d3fa2eb5369e8c1a39dd4.png";
import imgUnsplashQwtCeJ5CLYs from "../imports/Contains/68a6429d83c171dafbf8da1b803d7e2661019ea0.png";
import imgUnsplashHvSrCVecVi from "../imports/Contains/80a92ab9e1b37d40c154d4da5b0a67d51d3dfece.png";
import imgUnsplashNApaSgkzaxg from "../imports/Contains/f06fc764c0048be3c40fc6973ed3a93abcd20803.png";
import imgUnsplashTR0JvlsmCuQ from "../imports/Contains/b527878d063234aeabca4132e3c9c01f93f5d0d6.png";
import imgUnsplashNpxXWgQ33Zq from "../imports/Contains/42bfe61f5b89b64414dc379b02b2a323079f7b69.png";
import imgUnsplashPypeCEaJeZy from "../imports/Contains/153069fce941b0c81629f606f2a688239f36030f.png";
import imgLinkedinSalesSolutions2 from "../imports/Contains/d2b565ac8ae953bd6997d12426e8584b0f6aba87.png";
import imgUnsplashD2MsDujJl2G from "../imports/Contains/b799aae3f967434f528e8362841e12494f32b6c6.png";
import imgUnsplashD2MsDujJl2G1 from "../imports/Contains/dcce30e5f3a51ff0466feaa067b28c8e5f61894a.png";
import imgUnsplashD2MsDujJl2G2 from "../imports/Contains/82d71305a3f515f986548f34d4513bf8b8aa4789.png";
import imgUnsplashShrXn8S8Qu from "../imports/Contains/93f999df28a83493129848b0d76ea9558886577f.png";
import { imgUnsplashUnRkg2JH1J0 } from "../imports/Contains/svg-hf6s4";
import imgLinkedinSalesSolutions1 from "../imports/Contains/2c370bba51859e11cbafaddf6c9215e266e63cb0.png";
import imgUnsplashMcSDtbWxuzu from "../imports/Contains/97862dc2124aec8a9eff2ea6c9cc20e0779f620e.png";
import imgUnsplashJkuTrJ4VK00 from "../imports/Contains/d4ffbb96686ddd140ac89b4b47d1829b9866665b.png";
import imgUnsplashEveI7MOcSmw1 from "../imports/Contains/cbe41e643da685ecc227ab60ec4b66586ae20bd7.png";

// ─── Article Card ────────────────────────────────────────────────────────────

function ArticleCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="bg-white flex flex-col shadow-[0px_10px_15px_rgba(17,24,39,0.08)] flex-1 min-w-0">
      <div className="h-[180px] overflow-hidden shrink-0">
        <img alt={title} className="w-full h-full object-cover" src={img} />
      </div>
      <div className="flex flex-col gap-[12px] p-[16px] flex-1">
        <div className="flex flex-col gap-[8px] flex-1">
          <p className="font-['Open_Sans:Bold',sans-serif] text-[16px] leading-[1.4] text-[#0c111d] line-clamp-3">{title}</p>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] leading-[1.5] text-[#374151] line-clamp-3">{desc}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[4px]">
            <svg width="16" height="14" viewBox="0 0 14.7138 12.5664" fill="none">
              <path clipRule="evenodd" d={svgPaths.p2fc6d2c0} fill="#D1D5DB" fillRule="evenodd" />
            </svg>
            <span className="font-['Open_Sans:SemiBold',sans-serif] text-[11px] text-[#d1d5db]">10</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <svg width="16" height="12" viewBox="0 0 17.4971 12.8358" fill="none">
              <path clipRule="evenodd" d={svgPaths.p17fb440} fill="#D1D5DB" fillRule="evenodd" />
            </svg>
            <span className="font-['Open_Sans:SemiBold',sans-serif] text-[11px] text-[#d1d5db]">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Content Section ─────────────────────────────────────────────────────────

function ContentSection({ title, cards }: { title: string; cards: { img: string; title: string; desc: string }[] }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[6px]">
        <p className="font-['Open_Sans:Bold',sans-serif] text-[22px] leading-[1.5] text-[#f47441]">{title}</p>
        <div className="bg-[#f47441] h-[2px] w-[50px]" />
      </div>
      <div className="flex gap-[28px] items-stretch">
        {cards.map((card, i) => (
          <ArticleCard key={i} img={card.img} title={card.title} desc={card.desc} />
        ))}
      </div>
    </div>
  );
}

// ─── Rule Builder Data ────────────────────────────────────────────────────────

const OPERATOR_OPTIONS = ["is", "Contains"];

const AND_CONDITIONS = [
  "Contact Title",
  "Account Employee Range [6S]",
  "Account Buying Stage",
  "Account Domain",
  "Account Country",
  "Account Industry [6S]",
  "Account Name",
  "Account Profile Fit [6S]",
];

const VALUES_BY_FIELD: Record<string, string[]> = {
  "Contact Title": [
    "VP of Marketing", "CMO", "Director of Sales", "Head of Growth",
    "Marketing Manager", "Sales Director", "Account Executive", "Chief Revenue Officer",
  ],
  "Account Employee Range [6S]": ["1–50", "51–200", "201–500", "501–1,000", "1,001–5,000", "5,001–10,000", "10,000+"],
  "Account Buying Stage": ["Awareness", "Consideration", "Decision", "Retention", "Advocacy"],
  "Account Domain": ["Enterprise", "Mid-Market", "SMB", "Startup", "Agency", "Non-profit"],
  "Account Country": ["United States", "United Kingdom", "Germany", "France", "Israel", "Canada", "Australia"],
  "Account Industry [6S]": ["Software & Technology", "Financial Services", "Healthcare", "Manufacturing", "Retail & E-commerce", "Professional Services", "Media & Entertainment"],
  "Account Name": ["Salesforce", "HubSpot", "Marketo", "Oracle", "SAP", "Microsoft", "Gartner"],
  "Account Profile Fit [6S]": ["Tier 1", "Tier 2", "Tier 3", "No Fit"],
};

type ConditionRow = { field: string; operator: string; values: string[]; expanded: boolean; isValueRow?: boolean; extraPairs?: { field: string; values: string[]; operator?: string }[] };
type RuleGroup = { rows: ConditionRow[]; groupExpanded: boolean };
type PopupMode =
  | { type: "value"; groupIndex: number; rowIndex: number; editFields?: { field: string; values: string[] }[]; editConditionIndex?: number; editAccumulated?: { field: string; values: string[] }[]; editMode?: "splitRows" | "extraPairs" }
  | { type: "addValue"; groupIndex: number; fields: string[]; conditionIndex: number; accumulated: { field: string; values: string[] }[] }
  | { type: "conditionPicker"; groupIndex: number }
  | { type: "conditionValue"; field: string; groupIndex: number }
  | { type: "newRulePicker" }
  | { type: "newRuleConditionValue"; field: string };

// ─── Value Picker Popup ───────────────────────────────────────────────────────

function ValuePickerPopup({
  field,
  initialSelected,
  onDone,
  onBack,
  fieldLabel,
  onNext,
}: {
  field: string;
  initialSelected: string[];
  onDone: (selected: string[]) => void;
  onBack?: () => void;
  fieldLabel?: string;
  onNext?: (selected: string[]) => void;
}) {
  const [selected, setSelected] = useState<string[]>(initialSelected);
  const [search, setSearch] = useState("");
  const allValues = VALUES_BY_FIELD[field] ?? [];
  const filtered = allValues.filter((v) => v.toLowerCase().includes(search.toLowerCase()));
  const label = `ADD ${field.replace(/ \[6S\]/, "").toUpperCase()}`;

  const toggle = (v: string) =>
    setSelected((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);

  return (
    <div className="bg-white rounded-[10px] shadow-[0px_20px_50px_rgba(17,24,39,0.18),0px_4px_12px_rgba(17,24,39,0.08)] w-[360px] overflow-hidden flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-[16px] py-[14px] border-b border-[#e5e7eb]">
        {onBack ? (
          <button onClick={onBack} className="p-[6px] -m-[6px] hover:bg-[#f3f4f6] rounded-[6px] transition-colors">
            <svg width="14" height="14" viewBox="0 0 12.8333 18.3333" fill="none" style={{ transform: "rotate(-90deg)" }}>
              <path d="M0 6.41667L1.2925 7.70917L5.5 3.51083V18.3333H7.33333V3.51083L11.5408 7.71833L12.8333 6.41667L6.41667 0L0 6.41667Z" fill="#334E68" />
            </svg>
          </button>
        ) : <div className="w-[26px]" />}
        <div className="flex flex-col items-center gap-[6px]">
          <span className="font-['Open_Sans:Bold',sans-serif] text-[13px] text-[#00a0ff] uppercase tracking-wide">
            {label}
          </span>
          {fieldLabel && (
            <span className="bg-[#f0f4f8] text-[#627d98] font-['Open_Sans:SemiBold',sans-serif] text-[10px] px-[10px] py-[3px] rounded-full uppercase tracking-wide">
              {fieldLabel.replace(/ \[6S\]/, "")}
            </span>
          )}
        </div>
        <div className="w-[26px]" />
      </div>
      {/* Search */}
      <div className="flex items-center gap-[10px] px-[16px] py-[12px] border-b border-[#e5e7eb]">
        <svg width="16" height="16" viewBox="0 0 17.49 17.49" fill="none" className="shrink-0">
          <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#9aafc4" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#102a43] placeholder-[#9aafc4] flex-1 focus:outline-none bg-transparent"
        />
      </div>
      {/* Actions */}
      <div className="flex items-center gap-[24px] px-[16px] py-[10px] border-b border-[#e5e7eb] bg-[#fafbfc]">
        <button
          onClick={() => setSelected([])}
          className="font-['Open_Sans:SemiBold',sans-serif] text-[12px] text-[#627d98] uppercase tracking-wide hover:text-[#102a43] transition-colors"
        >
          Clear Selected
        </button>
        <button
          onClick={() => setSelected(selected)}
          className="font-['Open_Sans:SemiBold',sans-serif] text-[12px] text-[#627d98] uppercase tracking-wide hover:text-[#102a43] transition-colors"
        >
          Show Selected ({selected.length})
        </button>
      </div>
      {/* List */}
      <div className="flex flex-col overflow-y-auto max-h-[280px] py-[4px]">
        {filtered.map((v) => {
          const checked = selected.includes(v);
          return (
            <button
              key={v}
              onClick={() => toggle(v)}
              className={`flex items-center gap-[12px] px-[16px] py-[10px] text-left transition-colors ${checked ? "bg-[#f0f9ff]" : "hover:bg-[#f3f4f6]"}`}
            >
              <div className={`w-[16px] h-[16px] rounded-[3px] border-2 flex items-center justify-center shrink-0 transition-colors ${checked ? "bg-[#00a0ff] border-[#00a0ff]" : "bg-white border-[#bcccdc]"}`}>
                {checked && (
                  <svg width="9" height="7" viewBox="0 0 8 6" fill="none">
                    <path clipRule="evenodd" d="M1.70711 2.29289C1.31658 1.90237 0.683418 1.90237 0.292893 2.29289C-0.0976311 2.68342 -0.0976311 3.31658 0.292893 3.70711L2.29289 5.70711C2.68342 6.09763 3.31658 6.09763 3.70711 5.70711L7.70711 1.70711C8.09763 1.31658 8.09763 0.683418 7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893L3 3.58579L1.70711 2.29289Z" fill="white" fillRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className={`font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#102a43] ${checked ? "font-['Open_Sans:SemiBold',sans-serif]" : ""}`}>{v}</span>
            </button>
          );
        })}
      </div>
      {/* Footer with primary CTA */}
      <div className="flex items-center justify-end gap-[10px] py-[14px] px-[16px] border-t border-[#e5e7eb] bg-[#fafbfc]">
        {onNext && (
          <button
            onClick={() => onNext(selected)}
            className="bg-white border border-[#bcccdc] text-[#102a43] font-['Open_Sans:SemiBold',sans-serif] text-[14px] px-[18px] py-[8px] rounded-[6px] hover:bg-[#f3f4f6] transition-colors flex items-center gap-[6px]"
          >
            Next
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 6H10M6 2L10 6L6 10" stroke="#102a43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        <button
          onClick={() => onDone(selected)}
          className="bg-[#00a0ff] text-white font-['Open_Sans:Bold',sans-serif] text-[14px] px-[28px] py-[8px] rounded-[6px] hover:bg-[#0090e8] active:bg-[#0080d0] transition-colors shadow-[0px_2px_4px_rgba(0,160,255,0.25)]"
        >
          Done
        </button>
      </div>
    </div>
  );
}

// ─── Condition Picker Popup ───────────────────────────────────────────────────

function ConditionPickerPopup({
  onSelect,
}: {
  onSelect: (field: string) => void;
}) {
  return (
    <div className="bg-white rounded-[10px] shadow-[0px_20px_50px_rgba(17,24,39,0.18),0px_4px_12px_rgba(17,24,39,0.08)] w-[320px] py-[8px] overflow-hidden">
      <div className="px-[16px] py-[10px] border-b border-[#e5e7eb] mb-[4px]">
        <span className="font-['Open_Sans:Bold',sans-serif] text-[12px] text-[#627d98] uppercase tracking-wide">
          Add condition
        </span>
      </div>
      {AND_CONDITIONS.map((cond) => (
        <button
          key={cond}
          onClick={() => onSelect(cond)}
          className="w-full text-left px-[16px] py-[11px] font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#102a43] hover:bg-[#f3f4f6] transition-colors"
        >
          {cond}
        </button>
      ))}
    </div>
  );
}

// ─── Rule Builder Panel ───────────────────────────────────────────────────────

function RuleBuilderPlusButton({
  onClick,
  disabled = false,
  title,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  title?: string;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      title={title}
      onClick={onClick}
      className="p-[6px] rounded-[6px] transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-[#eef2f7] hover:bg-[#e2e8f0]"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d={svgPaths.p10425500} fill="#627d98" />
      </svg>
    </button>
  );
}

function GrayRow({
  group,
  groupIndex,
  isFirst,
  onToggleExpand,
  onOperatorChange,
  onDelete,
  onOpenAddMenu,
  addMenuOpen,
  addMenuRef,
  onAddValue,
  onAddCondition,
  onOpenAndPopup,
  onOpenAddValuesPopup,
  onOpenAdvancedPopup,
  onOpenMatrixPopup,
}: {
  group: RuleGroup;
  groupIndex: number;
  isFirst: boolean;
  onToggleExpand: () => void;
  onOperatorChange: (rowIndex: number, op: string) => void;
  onDelete: (rowIndex: number) => void;
  onOpenAddMenu: () => void;
  addMenuOpen: boolean;
  addMenuRef: React.RefObject<HTMLDivElement>;
  onAddValue: () => void;
  onAddCondition: () => void;
  onOpenAndPopup: () => void;
  onOpenAddValuesPopup: () => void;
  onOpenAdvancedPopup: () => void;
  onOpenMatrixPopup: () => void;
}) {
  const expanded = group.rows.some((r) => r.expanded);
  return (
    <div
      className="bg-[#eef2f7] flex items-center gap-[12px] px-[20px] py-[14px] cursor-pointer select-none border-b border-[#dde4ec]"
      onClick={onToggleExpand}
    >
      <div className={`transition-transform duration-200 shrink-0 ${expanded ? "rotate-90" : ""}`}>
        <svg width="7" height="11" viewBox="0 0 5.5 10" fill="none">
          <path d="M0 10L5.5 5L0 0V10Z" fill="#334E68" />
        </svg>
      </div>
      <div className="flex items-center gap-[8px] flex-wrap flex-1 min-w-0" onClick={(e) => e.stopPropagation()}>
        <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#627d98] whitespace-nowrap uppercase tracking-wide">
          {isFirst ? "If" : "Else if"}
        </span>
        {group.rows.filter((r) => !r.isValueRow).map((r, i) => (
          <span key={i} className="flex items-center gap-[8px]">
            {i > 0 && <span className="font-['Open_Sans:Bold',sans-serif] text-[13px] text-[#627d98]">&amp;</span>}
            <span className="font-['Open_Sans:Bold',sans-serif] text-[14px] text-[#102a43] whitespace-nowrap">
              {r.field.replace(/ \[6S\]/, "")}
            </span>
          </span>
        ))}
      </div>
      <div className="flex items-center gap-[2px] shrink-0 relative" onClick={(e) => e.stopPropagation()} ref={groupIndex === 0 ? addMenuRef : undefined}>
        <RuleBuilderPlusButton
          onClick={(e) => { e.stopPropagation(); onOpenMatrixPopup(); }}
          title="Open rule table"
        />
        {/* Blue & — advanced rule builder (hidden for now)
        <button
          onClick={(e) => { e.stopPropagation(); onOpenAdvancedPopup(); }}
          className="p-[6px] hover:bg-[#dde4ec] rounded-[6px] transition-colors flex items-center justify-center w-[30px] h-[30px] font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#00a0ff] leading-none"
          aria-label="Open advanced rule builder"
        >
          &amp;
        </button>
        */}
        <button
          onClick={(e) => { e.stopPropagation(); onOpenMatrixPopup(); }}
          className="p-[6px] hover:bg-[#dde4ec] rounded-[6px] transition-colors flex items-center justify-center w-[30px] h-[30px] font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#ef4444] leading-none"
          aria-label="Open matrix view"
        >
          &amp;
        </button>
        <button className="p-[6px] hover:bg-[#dde4ec] rounded-[6px] transition-colors" onClick={() => onDelete(0)}>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
            <path d={svgPaths.p4c48400} fill="#334E68" />
          </svg>
        </button>
        {addMenuOpen && (
          <div className="absolute right-0 top-[calc(100%+6px)] bg-white border border-[#e5e7eb] rounded-[8px] shadow-[0px_8px_24px_rgba(17,24,39,0.12)] z-50 min-w-[180px] overflow-hidden py-[4px]">
            <button
              className="w-full text-left px-[16px] py-[10px] font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#102a43] hover:bg-[#f3f4f6] transition-colors"
              onMouseDown={(e) => { e.stopPropagation(); onAddValue(); }}
            >
              Add value
            </button>
            <button
              className="w-full text-left px-[16px] py-[10px] font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#102a43] hover:bg-[#f3f4f6] transition-colors"
              onMouseDown={(e) => { e.stopPropagation(); onAddCondition(); }}
            >
              Add condition
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Priority Rule Popup (from Figma: Personalization_Studio_v4 node 3434:1093) ─

const PRIORITY_FIELD_OPTIONS = [
  "Account Employee Range [6S]",
  "Account Buying Stage",
  "Account Domain",
  "Account Country",
  "Account Industry [6S]",
  "Account Name",
  "Account Profile Fit [6S]",
];

const PRIORITY_OPERATOR_OPTIONS = ["Is", "Contains"];

const PRIORITY_VALUES_BY_FIELD: Record<string, string[]> = {
  "Account Employee Range [6S]": ["1–50", "51–200", "201–500", "501–1,000", "1,001–5,000", "5,001–10,000", "10,000+"],
  "Account Buying Stage": ["Awareness", "Consideration", "Decision", "Retention", "Advocacy"],
  "Account Domain": ["Enterprise", "Mid-Market", "SMB", "Startup", "Agency", "Non-profit"],
  "Account Country": ["United States", "United Kingdom", "Germany", "France", "Israel", "Canada", "Australia"],
  "Account Industry [6S]": ["Software & Technology", "Financial Services", "Healthcare", "Manufacturing", "Retail & E-commerce", "Professional Services", "Media & Entertainment"],
  "Account Name": ["Acme Corp", "Globex", "Initech", "Umbrella", "Stark Industries", "Wayne Enterprises"],
  "Account Profile Fit [6S]": ["Strong", "Moderate", "Weak"],
};

type PriorityCondition = {
  id: number;
  field: string;
  operator: string;
  values: string[];
};

function ChevronDown() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="shrink-0">
      <path d="M1 1.5L6 6.5L11 1.5" stroke="#102a43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrashIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="20" viewBox="0 0 14 18" fill="none" className={className}>
      <path d={svgPaths.p4c48400} fill="currentColor" />
    </svg>
  );
}

function PriorityFieldDropdown({
  value,
  options,
  onChange,
  width,
  placeholder,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
  width?: string;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" style={{ width }} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full bg-white border border-[#bcccdc] rounded-[4px] pl-[12px] pr-[8px] py-[6px] flex items-center justify-between gap-[10px] hover:border-[#9aafc4] transition-colors focus:outline-none focus:border-[#00a0ff]"
      >
        <span className={`font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[1.5] whitespace-nowrap truncate ${value ? "text-[#102a43]" : "text-[#bcccdc]"}`}>
          {value || placeholder}
        </span>
        <ChevronDown />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border border-[#e5e7eb] rounded-[6px] shadow-[0px_8px_24px_rgba(17,24,39,0.12)] z-50 max-h-[260px] overflow-y-auto py-[4px]">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onMouseDown={(e) => { e.stopPropagation(); onChange(opt); setOpen(false); }}
              className={`w-full text-left px-[12px] py-[8px] font-['Open_Sans:Regular',sans-serif] text-[14px] hover:bg-[#f3f4f6] transition-colors ${opt === value ? "text-[#00a0ff] bg-[#f0f9ff]" : "text-[#102a43]"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PriorityValueField({
  values,
  options,
  onChange,
}: {
  values: string[];
  options: string[];
  onChange: (next: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (v: string) => {
    onChange(values.includes(v) ? values.filter((x) => x !== v) : [...values, v]);
  };

  return (
    <div className="relative flex-1 min-w-0" ref={ref}>
      <div
        onClick={() => setOpen((v) => !v)}
        className="bg-white border border-[#bcccdc] rounded-[8px] px-[10px] py-[6px] flex flex-wrap gap-[6px] items-center min-h-[36px] cursor-pointer hover:border-[#9aafc4] transition-colors"
      >
        {values.length === 0 ? (
          <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#bcccdc] leading-[1.5]">Select values...</span>
        ) : (
          values.map((v) => (
            <span
              key={v}
              className="bg-[#ddf2ff] flex items-center gap-[6px] pl-[10px] pr-[8px] py-[4px] rounded-[4px]"
            >
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[#00a0ff] leading-none">{v}</span>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); toggle(v); }}
                className="font-['Inter:Medium',sans-serif] text-[11px] text-[#00a0ff] leading-none hover:opacity-70"
              >
                ✕
              </button>
            </span>
          ))
        )}
      </div>
      {open && options.length > 0 && (
        <div className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border border-[#e5e7eb] rounded-[6px] shadow-[0px_8px_24px_rgba(17,24,39,0.12)] z-50 max-h-[240px] overflow-y-auto py-[4px]">
          {options.map((opt) => {
            const selected = values.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onMouseDown={(e) => { e.stopPropagation(); toggle(opt); }}
                className={`w-full text-left px-[12px] py-[8px] font-['Open_Sans:Regular',sans-serif] text-[14px] hover:bg-[#f3f4f6] transition-colors flex items-center justify-between ${selected ? "text-[#00a0ff] bg-[#f0f9ff]" : "text-[#102a43]"}`}
              >
                <span>{opt}</span>
                {selected && <span className="text-[#00a0ff]">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function PriorityRulePopup({
  onClose,
  onDone,
  initialConditions,
}: {
  onClose: () => void;
  onDone: (conditions: PriorityCondition[]) => void;
  initialConditions?: PriorityCondition[];
}) {
  const [conditions, setConditions] = useState<PriorityCondition[]>(
    initialConditions && initialConditions.length > 0
      ? initialConditions
      : [{ id: 1, field: "", operator: "Is", values: [] }]
  );
  const nextIdRef = useRef(
    Math.max(0, ...((initialConditions ?? []).map((c) => c.id))) + 1
  );

  const updateCondition = (id: number, patch: Partial<PriorityCondition>) => {
    setConditions((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  };

  const removeCondition = (id: number) => {
    setConditions((prev) => prev.filter((c) => c.id !== id));
  };

  const addCondition = () => {
    setConditions((prev) => [
      ...prev,
      { id: nextIdRef.current++, field: "", operator: "Is", values: [] },
    ]);
  };

  const canSubmit = conditions.length > 0 && conditions.every((c) => c.field && c.values.length > 0);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[60px] pb-[40px] overflow-y-auto bg-black/30"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#d9e2ec] rounded-[12px] w-[940px] max-w-[calc(100vw-40px)] shadow-[0px_20px_50px_rgba(17,24,39,0.22)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white flex items-center gap-[12px] px-[16px] py-[16px] rounded-t-[12px]">
          <p className="flex-1 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#212126] leading-normal">rule</p>
          <button
            onClick={onClose}
            className="bg-white p-[6px] rounded-[4px] hover:bg-[#f4f7fb] transition-colors text-[#ef4444]"
            aria-label="Delete rule"
          >
            <TrashIcon />
          </button>
        </div>

        {/* Separator */}
        <div className="bg-[#d9d9de] h-px w-full" />

        {/* Conditions */}
        <div className="bg-white flex flex-col gap-[16px] px-[20px] py-[24px] min-h-[320px]">
          {conditions.map((c, i) => (
            <div key={c.id} className="flex gap-[8px] items-center w-full">
              <div className={`flex items-center justify-center py-[4px] w-[56px] shrink-0 ${i === 0 ? "" : "bg-[#f4f7fb] rounded-[6px]"}`}>
                <span className="font-['Open_Sans:Bold',sans-serif] font-bold text-[12px] text-[#627d98] leading-[1.5]">
                  {i === 0 ? "WHERE" : "AND"}
                </span>
              </div>
              <PriorityFieldDropdown
                value={c.field}
                options={PRIORITY_FIELD_OPTIONS}
                onChange={(v) => updateCondition(c.id, { field: v, values: [] })}
                width="240px"
                placeholder="Select field"
              />
              <PriorityFieldDropdown
                value={c.operator}
                options={PRIORITY_OPERATOR_OPTIONS}
                onChange={(v) => updateCondition(c.id, { operator: v })}
                width="120px"
              />
              <PriorityValueField
                values={c.values}
                options={PRIORITY_VALUES_BY_FIELD[c.field] ?? []}
                onChange={(next) => updateCondition(c.id, { values: next })}
              />
              <button
                type="button"
                onClick={() => removeCondition(c.id)}
                className="bg-white p-[6px] rounded-[4px] hover:bg-[#fef2f2] transition-colors text-[#ef4444] shrink-0"
                aria-label="Delete condition"
              >
                <TrashIcon />
              </button>
            </div>
          ))}

          {/* Add condition link */}
          <div className="flex items-center pl-[56px] py-[8px]">
            <button
              type="button"
              onClick={addCondition}
              className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#00a0ff] leading-[1.5] hover:opacity-80 transition-opacity"
            >
              + Add condition
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f9fafb] flex items-center justify-end gap-[12px] px-[20px] py-[16px] border-t border-[#e5e7eb] rounded-b-[12px]">
          <button
            type="button"
            onClick={onClose}
            className="bg-white border border-[#bcccdc] rounded-[6px] px-[18px] py-[8px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#102a43] hover:bg-[#f3f4f6] transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!canSubmit}
            onClick={() => onDone(conditions.filter((c) => c.field && c.values.length > 0))}
            className="bg-[#00a0ff] rounded-[6px] px-[20px] py-[8px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-white hover:bg-[#0090e8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Advanced Rule Popup (Rule → Attributes → Value Groups) ─────────────────

type AttributeDef = { id: string; key: string; label: string };
type AttributeValueSelection = { mode: "specific_values" | "any" | "not_set"; values: string[]; operator?: "is" | "contains" };
type ValueGroup = { id: string; name: string; valuesByAttributeId: Record<string, AttributeValueSelection> };
type AdvancedRule = { id: string; name: string; priority: number; attributes: AttributeDef[]; groups: ValueGroup[] };

const ATTRIBUTE_CATALOG: AttributeDef[] = [
  { id: "contact_title", key: "contactTitle", label: "Contact Title" },
  { id: "account_domain", key: "accountDomain", label: "Account Domain" },
  { id: "account_country", key: "accountCountry", label: "Account Country" },
  { id: "account_industry", key: "accountIndustry", label: "Account Industry" },
  { id: "account_employee_range", key: "accountEmployeeRange", label: "Account Employee Range" },
  { id: "account_buying_stage", key: "accountBuyingStage", label: "Account Buying Stage" },
  { id: "account_name", key: "accountName", label: "Account Name" },
  { id: "account_profile_fit", key: "accountProfileFit", label: "Account Profile Fit" },
];

const ADV_VALUES_BY_ATTRIBUTE: Record<string, string[]> = {
  contact_title: ["VP of Marketing", "CMO", "Director of Sales", "Head of Marketing", "Marketing Director", "Head of Growth", "Marketing Manager", "Sales Director", "Account Executive", "CRO"],
  account_domain: ["Enterprise", "Mid-Market", "SMB", "Startup", "Agency", "Non-profit"],
  account_country: ["United States", "United Kingdom", "Germany", "France", "Israel", "Canada", "Australia", "Spain", "Italy"],
  account_industry: ["Software & Technology", "Financial Services", "Healthcare", "Manufacturing", "Retail & E-commerce", "Professional Services", "Media & Entertainment"],
  account_employee_range: ["1–50", "51–200", "201–500", "501–1,000", "1,001–5,000", "5,001–10,000", "10,000+"],
  account_buying_stage: ["Awareness", "Consideration", "Decision", "Retention", "Advocacy"],
  account_name: ["Acme Corp", "Globex", "Initech", "Umbrella", "Stark Industries", "Wayne Enterprises"],
  account_profile_fit: ["Strong", "Moderate", "Weak"],
};

let __advIdCounter = 0;
const advNextId = () => `adv_${++__advIdCounter}_${Date.now().toString(36)}`;
const emptySelection = (): AttributeValueSelection => ({ mode: "not_set", values: [], operator: "is" });

function findOrMakeAttribute(fieldLabel: string): AttributeDef {
  const cleanLabel = fieldLabel.replace(/ \[6S\]/, "");
  const match = ATTRIBUTE_CATALOG.find((a) => a.label === cleanLabel || a.label === fieldLabel);
  if (match) return match;
  return {
    id: fieldLabel.toLowerCase().replace(/[^a-z0-9]+/g, "_"),
    key: fieldLabel,
    label: cleanLabel,
  };
}

function attributeToFieldLabel(attr: AttributeDef): string {
  const match = AND_CONDITIONS.find(
    (c) => c.replace(/ \[6S\]/, "") === attr.label || c === attr.label,
  );
  return match ?? attr.label;
}

function ruleGroupToAdvancedRule(rg: RuleGroup, fallbackName: string): AdvancedRule {
  const condRows = rg.rows.filter((r) => !r.isValueRow);
  const valueRows = rg.rows.filter((r) => r.isValueRow);

  const attributes: AttributeDef[] = [];
  const seen = new Set<string>();

  const ensureAttr = (field: string): AttributeDef => {
    const attr = findOrMakeAttribute(field);
    if (!seen.has(attr.id)) {
      seen.add(attr.id);
      attributes.push(attr);
    }
    return attr;
  };

  for (const r of condRows) ensureAttr(r.field);
  for (const vr of valueRows) {
    ensureAttr(vr.field);
    for (const p of vr.extraPairs ?? []) ensureAttr(p.field);
  }

  const blankGroup = (name: string): ValueGroup => ({
    id: advNextId(),
    name,
    valuesByAttributeId: Object.fromEntries(attributes.map((a) => [a.id, emptySelection()])),
  });

  let groups: ValueGroup[];

  if (valueRows.length > 0) {
    groups = valueRows.map((vr, idx) => {
      const grp = blankGroup(`Group ${idx + 1}`);
      const pairs = [{ field: vr.field, values: vr.values, operator: vr.operator }, ...(vr.extraPairs ?? [])];
      for (const p of pairs) {
        const attr = ensureAttr(p.field);
        if (p.values.length > 0) {
          grp.valuesByAttributeId[attr.id] = {
            mode: "specific_values",
            values: [...p.values],
            operator: (p.operator ?? vr.operator) === "contains" ? "contains" : "is",
          };
        }
      }
      for (const attr of attributes) {
        if (!grp.valuesByAttributeId[attr.id]) grp.valuesByAttributeId[attr.id] = emptySelection();
      }
      return grp;
    });
  } else {
    const grp = blankGroup("Group 1");
    for (const r of condRows) {
      const attr = ensureAttr(r.field);
      if (r.values.length > 0) {
        grp.valuesByAttributeId[attr.id] = {
          mode: "specific_values",
          values: [...r.values],
          operator: r.operator === "contains" ? "contains" : "is",
        };
      }
    }
    groups = [grp];
  }

  return {
    id: advNextId(),
    name: fallbackName,
    priority: 1,
    attributes,
    groups: groups.length > 0 ? groups : [blankGroup("Group 1")],
  };
}

function advancedRuleToRuleGroup(adv: AdvancedRule): RuleGroup {
  const condRows: ConditionRow[] = adv.attributes.map((attr) => ({
    field: attributeToFieldLabel(attr),
    operator: "is",
    values: [],
    expanded: true,
  }));

  const valueRows: ConditionRow[] = adv.groups
    .map((group) => {
      const pairsWithValues = adv.attributes
        .map((attr) => {
          const sel = group.valuesByAttributeId[attr.id];
          if (!sel || sel.mode !== "specific_values" || sel.values.length === 0) return null;
          return {
            field: attributeToFieldLabel(attr),
            values: [...sel.values],
            operator: sel.operator === "contains" ? "contains" : "is",
          };
        })
        .filter(Boolean) as { field: string; values: string[]; operator: string }[];

      if (pairsWithValues.length === 0) return null;

      const [first, ...rest] = pairsWithValues;
      return {
        field: first.field,
        operator: first.operator,
        values: first.values,
        expanded: true,
        isValueRow: true,
        extraPairs: rest.length > 0
          ? rest.map((p) => ({ field: p.field, values: p.values, operator: p.operator }))
          : undefined,
      };
    })
    .filter(Boolean) as ConditionRow[];

  return {
    rows: [...condRows, ...valueRows],
    groupExpanded: true,
  };
}

function createDefaultAdvancedRule(): AdvancedRule {
  const attrCT = ATTRIBUTE_CATALOG.find((a) => a.id === "contact_title")!;
  const attrAD = ATTRIBUTE_CATALOG.find((a) => a.id === "account_domain")!;
  const attrAC = ATTRIBUTE_CATALOG.find((a) => a.id === "account_country")!;
  return {
    id: advNextId(),
    name: "Enterprise marketing leaders",
    priority: 1,
    attributes: [attrCT, attrAD, attrAC],
    groups: [
      {
        id: advNextId(),
        name: "North America executives",
        valuesByAttributeId: {
          contact_title: { mode: "specific_values", values: ["VP of Marketing", "CMO"], operator: "is" },
          account_domain: { mode: "specific_values", values: ["Enterprise"], operator: "is" },
          account_country: { mode: "specific_values", values: ["United States", "Canada"], operator: "is" },
        },
      },
      {
        id: advNextId(),
        name: "UK marketing leaders",
        valuesByAttributeId: {
          contact_title: { mode: "specific_values", values: ["Head of Marketing", "Marketing Director"], operator: "is" },
          account_domain: { mode: "specific_values", values: ["Enterprise"], operator: "is" },
          account_country: { mode: "specific_values", values: ["United Kingdom"], operator: "is" },
        },
      },
    ],
  };
}

function buildGroupPreview(rule: AdvancedRule, group: ValueGroup): string {
  const parts: string[] = [];
  for (const attr of rule.attributes) {
    const sel = group.valuesByAttributeId[attr.id];
    if (!sel || sel.mode === "not_set") continue;
    if (sel.mode === "any") {
      parts.push(`any ${attr.label.toLowerCase()}`);
    } else if (sel.values.length > 0) {
      const list = sel.values.length === 1
        ? sel.values[0]
        : sel.values.slice(0, -1).join(", ") + " or " + sel.values[sel.values.length - 1];
      parts.push(`${attr.label.toLowerCase()} is ${list}`);
    }
  }
  if (parts.length === 0) return "No conditions set for this group yet.";
  return "Matches when " + parts.join(" AND ") + ".";
}

function AdvancedValueSelect({
  values, options, onChange, disabled = false, placeholder = "Select values...",
}: { values: string[]; options: string[]; onChange: (v: string[]) => void; disabled?: boolean; placeholder?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function h(e: MouseEvent) { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const toggle = (v: string) => onChange(values.includes(v) ? values.filter((x) => x !== v) : [...values, v]);

  return (
    <div className="relative flex-1 min-w-0" ref={ref}>
      <div
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`border rounded-[8px] px-[10px] py-[6px] flex flex-wrap gap-[6px] items-center min-h-[36px] transition-colors ${disabled ? "bg-[#f9fafb] border-[#e5e7eb] cursor-not-allowed" : "bg-white border-[#bcccdc] hover:border-[#9aafc4] cursor-pointer"}`}
      >
        {values.length === 0 ? (
          <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] leading-[1.5] text-[#bcccdc]">{disabled ? "Any value" : placeholder}</span>
        ) : (
          values.map((v) => (
            <span key={v} className="bg-[#ddf2ff] flex items-center gap-[6px] pl-[10px] pr-[8px] py-[4px] rounded-[4px]">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[#00a0ff] leading-none">{v}</span>
              <button type="button" onClick={(e) => { e.stopPropagation(); toggle(v); }} className="text-[11px] text-[#00a0ff] leading-none hover:opacity-70">✕</button>
            </span>
          ))
        )}
      </div>
      {open && !disabled && (
        <div className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border border-[#e5e7eb] rounded-[6px] shadow-[0px_8px_24px_rgba(17,24,39,0.12)] z-50 max-h-[240px] overflow-y-auto py-[4px]">
          {options.length === 0 ? (
            <div className="px-[12px] py-[8px] font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#627d98]">No values available</div>
          ) : options.map((opt) => {
            const sel = values.includes(opt);
            return (
              <button key={opt} type="button" onMouseDown={(e) => { e.stopPropagation(); toggle(opt); }}
                className={`w-full text-left px-[12px] py-[8px] font-['Open_Sans:Regular',sans-serif] text-[14px] hover:bg-[#f3f4f6] flex items-center justify-between ${sel ? "text-[#00a0ff] bg-[#f0f9ff]" : "text-[#102a43]"}`}>
                <span>{opt}</span>
                {sel && <span className="text-[#00a0ff]">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AttributeAddDropdown({
  excludeIds,
  onAdd,
  compact = false,
}: {
  excludeIds: string[];
  onAdd: (attr: AttributeDef) => void;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function h(e: MouseEvent) { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const available = ATTRIBUTE_CATALOG.filter((a) => !excludeIds.includes(a.id));

  return (
    <div className="relative inline-block" ref={ref}>
      {compact ? (
        <RuleBuilderPlusButton
          onClick={() => setOpen((v) => !v)}
          disabled={available.length === 0}
          title="Add attribute"
        />
      ) : (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          disabled={available.length === 0}
          className="border border-dashed border-[#bcccdc] rounded-[6px] px-[12px] py-[6px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[13px] text-[#00a0ff] hover:bg-[#f0f9ff] hover:border-[#00a0ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          + Add attribute
        </button>
      )}
      {open && available.length > 0 && (
        <div className={`absolute top-[calc(100%+4px)] bg-white border border-[#e5e7eb] rounded-[6px] shadow-[0px_8px_24px_rgba(17,24,39,0.12)] z-[60] min-w-[220px] max-h-[260px] overflow-y-auto py-[4px] ${compact ? "right-0" : "left-0"}`}>
          {available.map((attr) => (
            <button key={attr.id} type="button"
              onMouseDown={(e) => { e.stopPropagation(); onAdd(attr); setOpen(false); }}
              className="w-full text-left px-[12px] py-[8px] font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#102a43] hover:bg-[#f3f4f6]"
            >
              {attr.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ValueGroupCard({
  rule, group, index, total, isDuplicate, onUpdate, onDuplicate, onDelete, onMoveUp, onMoveDown,
}: {
  rule: AdvancedRule; group: ValueGroup; index: number; total: number; isDuplicate: boolean;
  onUpdate: (g: ValueGroup) => void; onDuplicate: () => void; onDelete: () => void;
  onMoveUp: () => void; onMoveDown: () => void;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const setSelection = (attrId: string, next: AttributeValueSelection) => {
    onUpdate({ ...group, valuesByAttributeId: { ...group.valuesByAttributeId, [attrId]: next } });
  };

  const isCopy = / copy(?: \d+)?$/.test(group.name);

  return (
    <div className={`bg-white border rounded-[10px] overflow-hidden ${isDuplicate ? "border-[#f59e0b] ring-1 ring-[#fbbf24]" : "border-[#e5e7eb]"}`}>
      <div className="bg-[#f9fafb] flex items-center gap-[10px] px-[16px] py-[10px] border-b border-[#e5e7eb]">
        <button type="button" onClick={() => setCollapsed((v) => !v)} className="shrink-0 p-[4px] -m-[4px] hover:bg-[#eef2f7] rounded">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform ${collapsed ? "" : "rotate-90"}`}>
            <path d="M2 1L7 5L2 9V1Z" fill="#627d98" />
          </svg>
        </button>
        <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#627d98] uppercase tracking-wide whitespace-nowrap">
          Group {index + 1}
        </span>
        <input
          type="text"
          value={group.name}
          onChange={(e) => onUpdate({ ...group, name: e.target.value })}
          className="flex-1 bg-transparent border border-transparent font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[15px] text-[#102a43] focus:outline-none focus:bg-white focus:border-[#bcccdc] rounded-[4px] px-[8px] py-[3px] -mx-[8px]"
          placeholder="Group name"
        />
        {isCopy && (
          <span className="bg-[#fef3c7] text-[#92400e] text-[11px] px-[8px] py-[3px] rounded-[4px] font-['Open_Sans:SemiBold',sans-serif] font-semibold whitespace-nowrap">
            Rename copy
          </span>
        )}
        <button type="button" onClick={onMoveUp} disabled={index === 0} className="p-[6px] text-[#627d98] hover:bg-[#eef2f7] rounded-[4px] transition-colors disabled:opacity-30 disabled:cursor-not-allowed" title="Move up">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 8L6 4L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" onClick={onMoveDown} disabled={index === total - 1} className="p-[6px] text-[#627d98] hover:bg-[#eef2f7] rounded-[4px] transition-colors disabled:opacity-30 disabled:cursor-not-allowed" title="Move down">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" onClick={onDuplicate} className="p-[6px] text-[#627d98] hover:bg-[#eef2f7] rounded-[4px] transition-colors" title="Duplicate group">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <rect x="2.5" y="2.5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M5.5 13.5h7a1 1 0 0 0 1-1v-7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </button>
        <button type="button" onClick={onDelete} className="p-[6px] text-[#ef4444] hover:bg-[#fef2f2] rounded-[4px] transition-colors" title="Delete group">
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
            <path d={svgPaths.p4c48400} fill="currentColor" />
          </svg>
        </button>
      </div>

      {!collapsed && (
        <div className="flex flex-col gap-[14px] px-[20px] py-[16px]">
          {rule.attributes.length === 0 && (
            <div className="text-center py-[16px] text-[#627d98] font-['Open_Sans:Regular',sans-serif] text-[13px]">
              Add attributes at the rule level to define this group.
            </div>
          )}
          {rule.attributes.map((attr) => {
            const sel = group.valuesByAttributeId[attr.id] ?? emptySelection();
            const operator = sel.operator ?? "is";
            const options = ADV_VALUES_BY_ATTRIBUTE[attr.id] ?? [];
            return (
              <div key={attr.id} className="flex items-center gap-[12px]">
                <span className="w-[180px] shrink-0 font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[13px] text-[#334e68]">
                  {attr.label}
                </span>
                <PriorityFieldDropdown
                  value={operator === "is" ? "Is" : "Contains"}
                  options={["Is", "Contains"]}
                  onChange={(v) => setSelection(attr.id, { ...sel, operator: v === "Is" ? "is" : "contains" })}
                  width="110px"
                />
                <AdvancedValueSelect
                  values={sel.values}
                  options={options}
                  onChange={(next) => setSelection(attr.id, { ...sel, mode: next.length > 0 ? "specific_values" : "not_set", values: next })}
                  placeholder="Select values..."
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AdvancedRulePopup({
  rule,
  setRule,
  onClose,
}: {
  rule: AdvancedRule;
  setRule: React.Dispatch<React.SetStateAction<AdvancedRule>>;
  onClose: () => void;
}) {
  const [pendingRemove, setPendingRemove] = useState<{ id: string; label: string } | null>(null);

  const addAttribute = (attr: AttributeDef) => {
    setRule((r) => ({
      ...r,
      attributes: [...r.attributes, attr],
      groups: r.groups.map((g) => ({
        ...g,
        valuesByAttributeId: { ...g.valuesByAttributeId, [attr.id]: emptySelection() },
      })),
    }));
  };

  const removeAttribute = (attr: AttributeDef) => {
    const hasValues = rule.groups.some((g) => {
      const s = g.valuesByAttributeId[attr.id];
      return s && (s.mode === "any" || (s.mode === "specific_values" && s.values.length > 0));
    });
    if (hasValues) {
      setPendingRemove({ id: attr.id, label: attr.label });
      return;
    }
    confirmRemoveAttribute(attr.id);
  };

  const confirmRemoveAttribute = (attrId: string) => {
    setRule((r) => ({
      ...r,
      attributes: r.attributes.filter((a) => a.id !== attrId),
      groups: r.groups.map((g) => {
        const next = { ...g.valuesByAttributeId };
        delete next[attrId];
        return { ...g, valuesByAttributeId: next };
      }),
    }));
    setPendingRemove(null);
  };

  const addGroup = () => {
    const empty: Record<string, AttributeValueSelection> = {};
    for (const a of rule.attributes) empty[a.id] = emptySelection();
    setRule((r) => ({
      ...r,
      groups: [...r.groups, { id: advNextId(), name: `Group ${r.groups.length + 1}`, valuesByAttributeId: empty }],
    }));
  };

  const duplicateGroup = (gid: string) => {
    setRule((r) => {
      const src = r.groups.find((g) => g.id === gid);
      if (!src) return r;
      const copy: ValueGroup = {
        id: advNextId(),
        name: `${src.name} copy`,
        valuesByAttributeId: Object.fromEntries(
          Object.entries(src.valuesByAttributeId).map(([k, v]) => [k, { ...v, values: [...v.values] }])
        ),
      };
      const idx = r.groups.findIndex((g) => g.id === gid);
      const next = [...r.groups];
      next.splice(idx + 1, 0, copy);
      return { ...r, groups: next };
    });
  };

  const deleteGroup = (gid: string) => {
    setRule((r) => {
      const next = r.groups.filter((g) => g.id !== gid);
      if (next.length === 0) {
        const empty: Record<string, AttributeValueSelection> = {};
        for (const a of r.attributes) empty[a.id] = emptySelection();
        return { ...r, groups: [{ id: advNextId(), name: "Group 1", valuesByAttributeId: empty }] };
      }
      return { ...r, groups: next };
    });
  };

  const updateGroup = (gid: string, next: ValueGroup) =>
    setRule((r) => ({ ...r, groups: r.groups.map((g) => g.id === gid ? next : g) }));

  const moveGroup = (gid: string, direction: -1 | 1) => {
    setRule((r) => {
      const idx = r.groups.findIndex((g) => g.id === gid);
      const target = idx + direction;
      if (idx < 0 || target < 0 || target >= r.groups.length) return r;
      const next = [...r.groups];
      [next[idx], next[target]] = [next[target], next[idx]];
      return { ...r, groups: next };
    });
  };

  // Validation
  const warnings: string[] = [];
  if (!rule.name.trim()) warnings.push("Rule name is empty.");
  if (rule.attributes.length === 0) warnings.push("Add at least one attribute.");
  const sigs = rule.groups.map((g) =>
    rule.attributes.map((a) => {
      const s = g.valuesByAttributeId[a.id];
      if (!s || s.mode === "not_set") return "ns";
      if (s.mode === "any") return "any";
      return [...s.values].sort().join("|");
    }).join("//")
  );
  const dupGroupIds = new Set<string>();
  for (let i = 0; i < sigs.length; i++) {
    for (let j = i + 1; j < sigs.length; j++) {
      if (sigs[i] && sigs[i] === sigs[j]) {
        warnings.push(`"${rule.groups[i].name}" and "${rule.groups[j].name}" are identical.`);
        dupGroupIds.add(rule.groups[j].id);
      }
    }
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center pt-[40px] pb-[40px] overflow-y-auto bg-black/40" onClick={onClose}>
      <div
        className="bg-white border border-[#d9e2ec] rounded-[12px] w-[980px] max-w-[calc(100vw-40px)] shadow-[0px_20px_50px_rgba(17,24,39,0.22)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Rule card header */}
        <div className="bg-white px-[20px] py-[14px] border-b border-[#e5e7eb] flex items-center gap-[12px] rounded-t-[12px]">
          <div className="text-[#bcccdc] cursor-grab shrink-0" title="Drag to reorder">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <circle cx="2" cy="3" r="1.3" fill="currentColor"/><circle cx="8" cy="3" r="1.3" fill="currentColor"/>
              <circle cx="2" cy="8" r="1.3" fill="currentColor"/><circle cx="8" cy="8" r="1.3" fill="currentColor"/>
              <circle cx="2" cy="13" r="1.3" fill="currentColor"/><circle cx="8" cy="13" r="1.3" fill="currentColor"/>
            </svg>
          </div>
          <input
            type="text"
            value={rule.name}
            onChange={(e) => setRule((r) => ({ ...r, name: e.target.value }))}
            className="flex-1 font-['Open_Sans:Bold',sans-serif] font-bold text-[18px] text-[#102a43] bg-transparent border border-transparent focus:outline-none focus:bg-[#f9fafb] focus:border-[#bcccdc] rounded-[4px] px-[6px] py-[2px] -mx-[6px]"
            placeholder="Rule name"
          />
          <button onClick={onClose} className="text-[#627d98] hover:bg-[#eef2f7] p-[6px] rounded-[4px] transition-colors" aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d={svgPaths.p2404b080} fill="currentColor"/></svg>
          </button>
        </div>

        <div className="flex flex-col gap-[28px] px-[20px] py-[24px] bg-white">
          {/* Section: Attributes */}
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-baseline gap-[10px] flex-wrap">
              <h3 className="font-['Open_Sans:Bold',sans-serif] font-bold text-[13px] text-[#102a43] uppercase tracking-wide">Attributes in this rule</h3>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#627d98]">Fixed structure used in every value group.</span>
            </div>
            <div className="flex flex-wrap gap-[8px] items-center">
              {rule.attributes.map((attr) => (
                <span key={attr.id} className="bg-[#ddf2ff] flex items-center gap-[8px] pl-[12px] pr-[8px] py-[6px] rounded-[6px]">
                  <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[13px] text-[#00a0ff]">{attr.label}</span>
                  <button type="button" onClick={() => removeAttribute(attr)} className="text-[#00a0ff] text-[12px] hover:opacity-70 leading-none" aria-label="Remove attribute">✕</button>
                </span>
              ))}
              <AttributeAddDropdown excludeIds={rule.attributes.map(a => a.id)} onAdd={addAttribute} />
            </div>
            {pendingRemove && (
              <div className="bg-[#fef3c7] border border-[#fbbf24] rounded-[6px] px-[12px] py-[10px] flex items-center gap-[12px]">
                <span className="flex-1 font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#92400e]">
                  Removing <strong>{pendingRemove.label}</strong> will remove its values from all groups.
                </span>
                <button type="button" onClick={() => setPendingRemove(null)} className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#92400e] hover:underline">Cancel</button>
                <button type="button" onClick={() => confirmRemoveAttribute(pendingRemove.id)} className="bg-[#dc2626] text-white text-[12px] font-['Open_Sans:SemiBold',sans-serif] font-semibold rounded-[4px] px-[12px] py-[4px] hover:bg-[#b91c1c]">Remove</button>
              </div>
            )}
          </div>

          {/* Section: Value groups */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-baseline gap-[10px] flex-wrap">
              <h3 className="font-['Open_Sans:Bold',sans-serif] font-bold text-[13px] text-[#102a43] uppercase tracking-wide">Value groups</h3>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#627d98]">Use the same attributes with different values.</span>
            </div>
            <div className="flex flex-col gap-[12px]">
              {rule.groups.map((g, i) => (
                <ValueGroupCard
                  key={g.id}
                  rule={rule}
                  group={g}
                  index={i}
                  total={rule.groups.length}
                  isDuplicate={dupGroupIds.has(g.id)}
                  onUpdate={(next) => updateGroup(g.id, next)}
                  onDuplicate={() => duplicateGroup(g.id)}
                  onDelete={() => deleteGroup(g.id)}
                  onMoveUp={() => moveGroup(g.id, -1)}
                  onMoveDown={() => moveGroup(g.id, 1)}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={addGroup}
              disabled={rule.attributes.length === 0}
              className="border border-dashed border-[#bcccdc] rounded-[8px] py-[10px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#00a0ff] hover:bg-[#f0f9ff] hover:border-[#00a0ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-start px-[20px]"
            >
              + Add value group
            </button>
          </div>

          {warnings.length > 0 && (
            <div className="bg-[#fef3c7] border border-[#fbbf24] rounded-[6px] px-[14px] py-[10px]">
              <div className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#92400e] uppercase tracking-wide mb-[4px]">Warnings</div>
              <ul className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#92400e] list-disc pl-[20px]">
                {warnings.map((w, i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#f9fafb] flex items-center justify-end gap-[12px] px-[20px] py-[14px] border-t border-[#e5e7eb] rounded-b-[12px]">
          <button type="button" onClick={onClose} className="bg-white border border-[#bcccdc] rounded-[6px] px-[18px] py-[8px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#102a43] hover:bg-[#f3f4f6] transition-colors">
            Cancel
          </button>
          <button type="button" onClick={onClose} className="bg-[#00a0ff] rounded-[6px] px-[20px] py-[8px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-white hover:bg-[#0090e8] transition-colors">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Matrix Rule Popup (compact matrix view) ────────────────────────────────

function MatrixAndLabel() {
  return (
    <span className="inline-block bg-[#eef2f7] text-[#627d98] font-['Open_Sans:Regular',sans-serif] text-[10px] leading-none px-[6px] py-[3px] rounded-[4px] lowercase">
      and
    </span>
  );
}

function MatrixCellDisplay({ selection }: { selection?: AttributeValueSelection }) {
  if (!selection || selection.mode === "not_set" || (selection.mode === "specific_values" && selection.values.length === 0)) {
    return (
      <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] italic text-[#bcccdc]">
        Click to add
      </span>
    );
  }
  if (selection.mode === "any") {
    return <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] italic text-[#627d98]">Any value</span>;
  }
  const operator = selection.operator ?? "is";
  const MAX_VISIBLE = 3;
  const visible = selection.values.slice(0, MAX_VISIBLE);
  const extra = selection.values.length - visible.length;
  return (
    <span className="flex items-center gap-[4px] flex-wrap">
      <span className="italic text-[#2563eb] text-[12px] font-['Open_Sans:Regular',sans-serif] mr-[2px]">{operator}</span>
      {visible.map((v) => (
        <span key={v} className="bg-[#ddf2ff] px-[8px] py-[3px] rounded-[4px] font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#00a0ff] whitespace-nowrap">
          {v}
        </span>
      ))}
      {extra > 0 && (
        <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#627d98] whitespace-nowrap">
          +{extra}
        </span>
      )}
    </span>
  );
}

function CellEditorPopover({
  attrLabel,
  selection,
  options,
  anchorRect,
  onChange,
  onClose,
}: {
  attrLabel: string;
  selection: AttributeValueSelection;
  options: string[];
  anchorRect: DOMRect;
  onChange: (next: AttributeValueSelection) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");
  const [showSelectedOnly, setShowSelectedOnly] = useState(false);

  useEffect(() => {
    function h(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [onClose]);

  const toggle = (v: string) => {
    const exists = selection.values.includes(v);
    const next = exists ? selection.values.filter((x) => x !== v) : [...selection.values, v];
    onChange({ ...selection, mode: "specific_values", values: next });
  };

  const clearSelected = () => onChange({ ...selection, mode: "specific_values", values: [] });

  const filtered = options
    .filter((o) => o.toLowerCase().includes(search.toLowerCase()))
    .filter((o) => !showSelectedOnly || selection.values.includes(o));

  const POPUP_W = 300;
  const POPUP_H = 440;
  const top = Math.min(anchorRect.bottom + 6, window.innerHeight - POPUP_H - 10);
  const left = Math.min(anchorRect.left, window.innerWidth - POPUP_W - 10);
  const selectedCount = selection.values.length;

  return (
    <div
      ref={ref}
      className="fixed z-[200] bg-white border border-[#bae6fd] rounded-[6px] shadow-[0px_10px_30px_rgba(17,24,39,0.18)] flex flex-col"
      style={{ top, left, width: POPUP_W, maxHeight: POPUP_H }}
    >
      {/* Top: ADD {ATTR} */}
      <div className="flex items-center justify-end px-[16px] pt-[14px]">
        <button
          type="button"
          className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#00a0ff] tracking-wide uppercase hover:opacity-80 whitespace-nowrap"
        >
          + Add {attrLabel}
        </button>
      </div>

      {/* Search */}
      <div className="px-[16px] pt-[10px]">
        <div className="relative border-b border-[#bcccdc] pb-[6px]">
          <input
            type="text"
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent border-0 px-0 py-[2px] pr-[20px] font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#102a43] placeholder-[#bcccdc] focus:outline-none"
          />
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="absolute right-0 top-[4px] pointer-events-none text-[#bcccdc]">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* CLEAR SELECTED / SHOW SELECTED */}
      <div className="flex items-center justify-between px-[16px] py-[10px]">
        <button
          type="button"
          onClick={clearSelected}
          disabled={selectedCount === 0}
          className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#627d98] tracking-wide uppercase hover:text-[#102a43] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Clear selected
        </button>
        <button
          type="button"
          onClick={() => setShowSelectedOnly((v) => !v)}
          disabled={selectedCount === 0}
          className={`font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] tracking-wide uppercase disabled:opacity-40 disabled:cursor-not-allowed ${showSelectedOnly ? "text-[#00a0ff]" : "text-[#627d98] hover:text-[#102a43]"}`}
        >
          {showSelectedOnly ? "Show all" : `Show selected (${selectedCount})`}
        </button>
      </div>

      {/* Operator toggle - above value list */}
      <div className="px-[16px] pb-[8px]">
        <div className="inline-flex bg-[#eef2f7] rounded-[20px] p-[3px]">
          {(["is", "contains"] as const).map((op) => {
            const active = (selection.operator ?? "is") === op;
            return (
              <button
                key={op}
                type="button"
                onClick={() => onChange({ ...selection, operator: op })}
                className={`px-[16px] py-[5px] rounded-[16px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[13px] transition-all ${active ? "bg-white shadow-[0px_1px_2px_rgba(17,24,39,0.08)] text-[#102a43]" : "text-[#627d98] hover:text-[#102a43]"}`}
              >
                {op === "is" ? "is" : "Contains"}
              </button>
            );
          })}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-[8px]">
        {options.length === 0 ? (
          <div className="px-[12px] py-[10px] font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#627d98]">No values available</div>
        ) : filtered.length === 0 ? (
          <div className="px-[12px] py-[10px] font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#627d98]">No matches</div>
        ) : filtered.map((opt) => {
          const sel = selection.values.includes(opt);
          return (
            <label
              key={opt}
              className="flex items-center gap-[10px] px-[8px] py-[8px] rounded-[4px] hover:bg-[#f3f4f6] cursor-pointer select-none"
            >
              <span className="relative shrink-0 w-[18px] h-[18px] flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={sel}
                  onChange={() => toggle(opt)}
                  className="appearance-none w-[18px] h-[18px] border-[1.5px] border-[#bcccdc] rounded-[3px] checked:bg-[#00a0ff] checked:border-[#00a0ff] cursor-pointer transition-colors"
                />
                {sel && (
                  <svg className="absolute pointer-events-none" width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#102a43]">{opt}</span>
            </label>
          );
        })}
      </div>

      {/* Done */}
      <div className="flex justify-center px-[16px] py-[12px] border-t border-[#e5e7eb] bg-[#f9fafb]">
        <button
          type="button"
          onClick={onClose}
          className="bg-[#eef2f7] hover:bg-[#dde4ec] rounded-[6px] px-[28px] py-[8px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#102a43] transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
}

function MatrixRulePopup({
  rule,
  setRule,
  onClose,
  onDone,
}: {
  rule: AdvancedRule;
  setRule: React.Dispatch<React.SetStateAction<AdvancedRule>>;
  onClose: () => void;
  onDone: (rule: AdvancedRule) => void;
}) {
  const [editing, setEditing] = useState<{ attrId: string; groupId: string; rect: DOMRect } | null>(null);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const reorderGroups = (from: number, to: number) => {
    if (from === to || to < 0 || to > rule.groups.length) return;
    setRule((r) => {
      const next = [...r.groups];
      const [moved] = next.splice(from, 1);
      next.splice(to > from ? to - 1 : to, 0, moved);
      return { ...r, groups: next };
    });
  };

  const addAttribute = (attr: AttributeDef) => {
    setRule((r) => ({
      ...r,
      attributes: [...r.attributes, attr],
      groups: r.groups.map((g) => ({
        ...g,
        valuesByAttributeId: { ...g.valuesByAttributeId, [attr.id]: emptySelection() },
      })),
    }));
  };

  const removeAttribute = (attrId: string) => {
    setRule((r) => ({
      ...r,
      attributes: r.attributes.filter((a) => a.id !== attrId),
      groups: r.groups.map((g) => {
        const next = { ...g.valuesByAttributeId };
        delete next[attrId];
        return { ...g, valuesByAttributeId: next };
      }),
    }));
  };

  const addGroup = () => {
    const empty: Record<string, AttributeValueSelection> = {};
    for (const a of rule.attributes) empty[a.id] = emptySelection();
    setRule((r) => ({
      ...r,
      groups: [...r.groups, { id: advNextId(), name: `Group ${r.groups.length + 1}`, valuesByAttributeId: empty }],
    }));
  };

  const deleteGroup = (gid: string) => {
    setRule((r) => {
      const next = r.groups.filter((g) => g.id !== gid);
      if (next.length === 0) {
        const empty: Record<string, AttributeValueSelection> = {};
        for (const a of r.attributes) empty[a.id] = emptySelection();
        return { ...r, groups: [{ id: advNextId(), name: "Group 1", valuesByAttributeId: empty }] };
      }
      return { ...r, groups: next };
    });
  };

  const renameGroup = (gid: string, name: string) => {
    setRule((r) => ({ ...r, groups: r.groups.map((g) => g.id === gid ? { ...g, name } : g) }));
  };

  const updateCell = (gid: string, attrId: string, next: AttributeValueSelection) => {
    setRule((r) => ({
      ...r,
      groups: r.groups.map((g) => g.id === gid
        ? { ...g, valuesByAttributeId: { ...g.valuesByAttributeId, [attrId]: next } }
        : g
      ),
    }));
  };

  const handleCellClick = (e: React.MouseEvent<HTMLButtonElement>, attrId: string, groupId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setEditing({ attrId, groupId, rect });
  };

  const editingSelection = editing
    ? (rule.groups.find((g) => g.id === editing.groupId)?.valuesByAttributeId[editing.attrId] ?? emptySelection())
    : null;
  const editingAttr = editing ? rule.attributes.find((a) => a.id === editing.attrId) : null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-[20px] bg-[rgba(15,23,42,0.45)] backdrop-blur-[2px]">
      <div
        className="bg-white border border-[#e5e7eb] rounded-[4px] w-[min(1120px,calc(100vw-40px))] h-[min(85vh,800px)] shadow-[0px_20px_50px_rgba(17,24,39,0.22)] flex flex-col overflow-hidden"
      >
        {/* Header — Figma edit ads popup */}
        <div className="bg-white border-t-4 border-t-[#00a0ff] flex items-center gap-[20px] h-[50px] px-[12px] shrink-0">
          <p className="flex-1 font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[16px] leading-[1.5] text-[#102a43]">
            Rule builder
          </p>
          <button onClick={onClose} className="shrink-0 w-[24px] h-[24px] flex items-center justify-center text-[#102a43] hover:opacity-70 transition-opacity" aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d={svgPaths.p2404b080} fill="currentColor"/></svg>
          </button>
        </div>

        <div className="bg-white border-t border-[#f4f7fb] flex flex-col flex-1 min-h-0">
          <p className="px-[12px] pt-[10px] pb-[8px] font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#627d98] leading-[1.5]">
            Click any cell to edit values.<br/>
            Each row is an audience group. A group matches only when all attribute columns match.<br/>
            Rows = OR · Columns = AND
          </p>

        {/* Matrix */}
        <div className="overflow-auto flex-1 px-[12px]">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="text-left px-[10px] py-[8px] border-b border-[#e5e7eb] bg-white sticky left-0 z-10 w-[160px] min-w-[160px]">
                  <div className="flex items-center justify-between gap-[8px]">
                    <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#94a3b8] uppercase tracking-[0.08em]">Group</span>
                    <RuleBuilderPlusButton
                      onClick={addGroup}
                      disabled={rule.attributes.length === 0}
                      title="Add group"
                    />
                  </div>
                </th>
                {rule.attributes.map((attr, attrIdx) => (
                  <Fragment key={attr.id}>
                    {attrIdx > 0 && (
                      <th className="px-[2px] py-[8px] border-b border-[#e5e7eb] bg-white w-[36px] min-w-[36px] align-middle text-center">
                        <MatrixAndLabel />
                      </th>
                    )}
                    <th className="group/col text-left px-[10px] py-[8px] border-b border-l border-[#e5e7eb] bg-white min-w-[200px] align-middle">
                      <div className="flex items-center justify-between gap-[6px]">
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#334155] truncate">{attr.label}</span>
                        <button
                          type="button"
                          onClick={() => removeAttribute(attr.id)}
                          className="opacity-0 group-hover/col:opacity-100 transition-opacity p-[3px] text-[#94a3b8] hover:text-[#ef4444] hover:bg-[#fef2f2] rounded shrink-0"
                          title="Remove attribute"
                        >
                          <svg width="11" height="13" viewBox="0 0 14 18" fill="none"><path d={svgPaths.p4c48400} fill="currentColor" /></svg>
                        </button>
                      </div>
                    </th>
                  </Fragment>
                ))}
                <th className="px-[10px] py-[8px] border-b border-l border-[#e5e7eb] bg-white align-middle w-[44px] min-w-[44px] sticky right-0 z-20 shadow-[-4px_0_8px_rgba(15,23,42,0.04)]">
                  <AttributeAddDropdown excludeIds={rule.attributes.map((a) => a.id)} onAdd={addAttribute} compact />
                </th>
              </tr>
            </thead>
            <tbody>
              {rule.groups.map((g, idx) => {
                const isDragging = dragIndex === idx;
                const showTopIndicator = dragOverIndex === idx && dragIndex !== null && dragIndex !== idx;
                const showBottomIndicator = dragOverIndex === idx + 1 && dragIndex !== null && idx === rule.groups.length - 1;
                return (
                  <tr
                    key={g.id}
                    draggable
                    onDragStart={(e) => {
                      setDragIndex(idx);
                      e.dataTransfer.effectAllowed = "move";
                      e.dataTransfer.setData("text/plain", String(idx));
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = "move";
                      const rect = (e.currentTarget as HTMLTableRowElement).getBoundingClientRect();
                      const before = e.clientY < rect.top + rect.height / 2;
                      setDragOverIndex(before ? idx : idx + 1);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (dragIndex !== null && dragOverIndex !== null) reorderGroups(dragIndex, dragOverIndex);
                      setDragIndex(null);
                      setDragOverIndex(null);
                    }}
                    onDragEnd={() => { setDragIndex(null); setDragOverIndex(null); }}
                    className={`group/row transition-opacity ${isDragging ? "opacity-40" : ""}`}
                    style={{
                      boxShadow: showTopIndicator
                        ? "inset 0 2px 0 #00a0ff"
                        : showBottomIndicator
                          ? "inset 0 -2px 0 #00a0ff"
                          : undefined,
                    }}
                  >
                    <th className="text-left px-[6px] py-[6px] border-b border-[#f1f5f9] bg-white sticky left-0 z-10 align-middle w-[160px] min-w-[160px] group/groupcell">
                      <div className="flex items-center gap-[2px]">
                        <span
                          className="opacity-0 group-hover/row:opacity-100 transition-opacity text-[#94a3b8] hover:text-[#0f172a] cursor-grab active:cursor-grabbing shrink-0 p-[2px]"
                          title="Drag to reorder"
                        >
                          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                            <circle cx="3" cy="2" r="1.1" fill="currentColor"/>
                            <circle cx="7" cy="2" r="1.1" fill="currentColor"/>
                            <circle cx="3" cy="7" r="1.1" fill="currentColor"/>
                            <circle cx="7" cy="7" r="1.1" fill="currentColor"/>
                            <circle cx="3" cy="12" r="1.1" fill="currentColor"/>
                            <circle cx="7" cy="12" r="1.1" fill="currentColor"/>
                          </svg>
                        </span>
                        <input
                          type="text"
                          value={g.name}
                          onChange={(e) => renameGroup(g.id, e.target.value)}
                          className="flex-1 min-w-0 bg-transparent border border-transparent font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#0f172a] focus:outline-none focus:bg-[#f8fafc] focus:border-[#cbd5e1] rounded-[4px] px-[4px] py-[3px]"
                          placeholder="Group name"
                          onMouseDown={(e) => e.stopPropagation()}
                          draggable={false}
                        />
                        <button
                          type="button"
                          onClick={() => deleteGroup(g.id)}
                          className="opacity-0 group-hover/groupcell:opacity-100 transition-opacity p-[3px] text-[#94a3b8] hover:text-[#ef4444] hover:bg-[#fef2f2] rounded shrink-0"
                          title="Delete group"
                        >
                          <svg width="11" height="13" viewBox="0 0 14 18" fill="none"><path d={svgPaths.p4c48400} fill="currentColor" /></svg>
                        </button>
                      </div>
                    </th>
                    {rule.attributes.map((attr, attrIdx) => {
                      const sel = g.valuesByAttributeId[attr.id];
                      const isEditing = editing?.attrId === attr.id && editing.groupId === g.id;
                      return (
                        <Fragment key={attr.id}>
                          {attrIdx > 0 && (
                            <td className="border-b border-[#f1f5f9] bg-white w-[36px] min-w-[36px] align-middle" />
                          )}
                          <td className="border-b border-l border-[#f1f5f9] p-0 align-middle">
                            <button
                              type="button"
                              onClick={(e) => handleCellClick(e, attr.id, g.id)}
                              className={`w-full text-left px-[10px] py-[8px] transition-colors min-h-[40px] ${isEditing ? "bg-[#eff6ff]" : "bg-white hover:bg-[#f8fafc]"}`}
                            >
                              <MatrixCellDisplay selection={sel} />
                            </button>
                          </td>
                        </Fragment>
                      );
                    })}
                    <td className="border-b border-l border-[#f1f5f9] bg-white sticky right-0 z-10 shadow-[-4px_0_8px_rgba(15,23,42,0.04)]" />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer — Figma edit ads popup */}
        <div className="bg-[#f4f7fb] flex items-center justify-end gap-[16px] px-[24px] py-[8px] rounded-bl-[4px] rounded-br-[4px] shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#d9e2ec] hover:bg-[#cbd5e1] rounded-[4px] px-[16px] py-[6px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[14px] leading-[1.5] text-[#102a43] transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => { onDone(rule); onClose(); }}
            className="bg-[#00a0ff] hover:bg-[#0090e8] rounded-[4px] px-[16px] py-[6px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[16px] leading-[1.5] text-white transition-colors"
          >
            Done
          </button>
        </div>
        </div>
      </div>

      {editing && editingSelection && editingAttr && (
        <CellEditorPopover
          attrLabel={editingAttr.label}
          selection={editingSelection}
          options={ADV_VALUES_BY_ATTRIBUTE[editingAttr.id] ?? []}
          anchorRect={editing.rect}
          onChange={(next) => updateCell(editing.groupId, editing.attrId, next)}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
}

function RuleBuilderPanel({ onClose }: { onClose: () => void }) {
  const [ruleGroups, setRuleGroups] = useState<RuleGroup[]>([]);
  const [popup, setPopup] = useState<PopupMode | null>(null);
  const [activeGroup, setActiveGroup] = useState<number | null>(null);
  const [addMenuOpenFor, setAddMenuOpenFor] = useState<number | null>(null);
  const [priorityRuleState, setPriorityRuleState] = useState<
    | { mode: "edit" | "addValues"; groupIndex: number }
    | { mode: "editValueRow"; groupIndex: number; rowIndex: number }
    | null
  >(null);
  const [advancedRuleGroupIndex, setAdvancedRuleGroupIndex] = useState<number | null>(null);
  const [matrixRuleGroupIndex, setMatrixRuleGroupIndex] = useState<number | null>(null);
  const [advRule, setAdvRule] = useState<AdvancedRule>(() => createDefaultAdvancedRule());

  const openAdvancedFor = (gi: number) => {
    const rg = ruleGroups[gi];
    if (rg) setAdvRule(ruleGroupToAdvancedRule(rg, `Rule ${gi + 1}`));
    setAdvancedRuleGroupIndex(gi);
  };
  const openMatrixFor = (gi: number) => {
    const rg = ruleGroups[gi];
    if (rg) setAdvRule(ruleGroupToAdvancedRule(rg, `Rule ${gi + 1}`));
    setMatrixRuleGroupIndex(gi);
  };

  const valueRowGroupIndex = (group: RuleGroup, rowIndex: number) =>
    group.rows.slice(0, rowIndex).filter((r) => r.isValueRow).length;
  const addMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (addMenuRef.current && !addMenuRef.current.contains(e.target as Node)) {
        setAddMenuOpenFor(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (popup !== null) setAddMenuOpenFor(null);
  }, [popup]);

  const toggleGroupExpand = (gi: number) => {
    setRuleGroups((prev) => prev.map((g, i) =>
      i === gi ? { ...g, rows: g.rows.map((r) => ({ ...r, expanded: !g.rows[0].expanded })) } : g
    ));
  };

  const handleOperatorChange = (gi: number, ri: number, op: string) => {
    setRuleGroups((prev) => prev.map((g, i) =>
      i === gi ? { ...g, rows: g.rows.map((r, j) => j === ri ? { ...r, operator: op } : r) } : g
    ));
  };

  const handleValueDone = (gi: number, ri: number, selected: string[], newExtraPairs?: { field: string; values: string[] }[]) => {
    setRuleGroups((prev) => prev.map((g, i) =>
      i === gi ? { ...g, rows: g.rows.map((r, j) => j === ri ? {
        ...r,
        values: selected,
        expanded: selected.length > 0,
        ...(newExtraPairs !== undefined && { extraPairs: newExtraPairs.length > 0 ? newExtraPairs : undefined }),
      } : r) } : g
    ));
    setPopup(null);
  };

  const handleAddValueDone = (gi: number, field: string, selected: string[], extraPairs?: { field: string; values: string[] }[]) => {
    setRuleGroups((prev) => prev.map((g, i) =>
      i === gi ? { ...g, rows: [...g.rows, { field, operator: g.rows[0]?.operator ?? "is", values: selected, expanded: selected.length > 0, isValueRow: true, extraPairs: extraPairs && extraPairs.length > 0 ? extraPairs : undefined }] } : g
    ));
    setPopup(null);
  };

  const handleMultiConditionEditDone = (gi: number, allValues: { field: string; values: string[] }[]) => {
    setRuleGroups((prev) => prev.map((g, i) => {
      if (i !== gi) return g;
      return {
        ...g,
        rows: g.rows.map((r) => {
          if (r.isValueRow) return r;
          const match = allValues.find((p) => p.field === r.field);
          return match ? { ...r, values: match.values, expanded: match.values.length > 0 } : r;
        }),
      };
    }));
    setPopup(null);
  };

  const handleConditionValueDone = (gi: number, field: string, selected: string[]) => {
    setRuleGroups((prev) => prev.map((g, i) =>
      i === gi ? { ...g, rows: [...g.rows, { field, operator: "is", values: selected, expanded: selected.length > 0 }] } : g
    ));
    setPopup(null);
  };

  const handleNewRuleConditionValueDone = (field: string, selected: string[]) => {
    setRuleGroups((prev) => [...prev, {
      rows: [{ field, operator: "is", values: selected, expanded: selected.length > 0 }],
      groupExpanded: selected.length > 0,
    }]);
    setPopup(null);
  };

  const deleteGroup = (gi: number) => setRuleGroups((prev) => prev.filter((_, i) => i !== gi));

  const deleteRow = (gi: number, ri: number) => {
    const group = ruleGroups[gi];
    const row = group?.rows[ri];
    if (row?.isValueRow && matrixRuleGroupIndex === gi) {
      const groupIdx = valueRowGroupIndex(group, ri);
      setAdvRule((adv) => ({
        ...adv,
        groups: adv.groups.filter((_, i) => i !== groupIdx),
      }));
    }
    setRuleGroups((prev) => prev.map((g, i) =>
      i === gi ? { ...g, rows: g.rows.filter((_, j) => j !== ri) } : g
    ).filter((g) => g.rows.length > 0));
  };

  return (
    <div className="relative w-[720px]">
      <div className="flex flex-col w-[720px] shadow-[0px_20px_50px_rgba(17,24,39,0.22)] rounded-[8px] overflow-hidden bg-white">
        {/* Header */}
        <div className="bg-[#a23dad] flex items-center justify-between px-[24px] py-[16px]">
          <span className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-white tracking-[-0.1px]">Rule builder</span>
          <button onClick={onClose} className="text-white hover:opacity-70 transition-opacity p-[4px] -m-[4px]">
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d={svgPaths.p2404b080} fill="white" />
            </svg>
          </button>
        </div>

        {/* Rule groups */}
        {ruleGroups.map((group, gi) => (
          <div key={gi}>
            <GrayRow
              group={group}
              groupIndex={gi}
              isFirst={gi === 0}
              onToggleExpand={() => toggleGroupExpand(gi)}
              onOperatorChange={(ri, op) => handleOperatorChange(gi, ri, op)}
              onDelete={() => deleteGroup(gi)}
              onOpenAddMenu={() => setAddMenuOpenFor(addMenuOpenFor === gi ? null : gi)}
              addMenuOpen={addMenuOpenFor === gi}
              addMenuRef={gi === 0 ? addMenuRef : { current: null }}
              onAddValue={() => {
                const condFields = group.rows.filter((r) => !r.isValueRow).map((r) => r.field);
                setPopup({ type: "addValue", groupIndex: gi, fields: condFields.length > 0 ? condFields : [group.rows[0]?.field ?? ""], conditionIndex: 0, accumulated: [] });
              }}
              onAddCondition={() => setPopup({ type: "conditionPicker", groupIndex: gi })}
              onOpenAndPopup={() => setPriorityRuleState({ groupIndex: gi, mode: "edit" })}
              onOpenAddValuesPopup={() => setPriorityRuleState({ groupIndex: gi, mode: "addValues" })}
              onOpenAdvancedPopup={() => openAdvancedFor(gi)}
              onOpenMatrixPopup={() => openMatrixFor(gi)}
            />
            {/* White row for combined condition values (non-isValueRow), joined with & */}
            {(() => {
              const nonValueDefs = group.rows.filter((r) => !r.isValueRow);
              const conditionRows = nonValueDefs.filter((r) => r.values.length > 0);
              if (conditionRows.length === 0) return null;
              return (
                <div className={`flex items-center justify-between px-[40px] py-[14px] border-b border-[#e5e7eb] transition-colors ${activeGroup === gi ? "bg-[#f9eafc]" : "bg-white hover:bg-[#fafbfc]"}`}>
                  <span
                    className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] leading-[1.5] text-[#102a43] flex-1 min-w-0 cursor-text truncate"
                    onMouseDown={() => setActiveGroup(gi)}
                    onBlur={() => setActiveGroup(null)}
                    tabIndex={0}
                  >
                    {conditionRows.length === 1 ? (() => {
                      const r = conditionRows[0];
                      const ri = group.rows.indexOf(r);
                      return (
                        <span className="inline-flex items-baseline gap-[6px]">
                          <span className="relative inline-block">
                            <select
                              value={r.operator}
                              onChange={(e) => handleOperatorChange(gi, ri, e.target.value)}
                              onMouseDown={(e) => e.stopPropagation()}
                              onClick={(e) => e.stopPropagation()}
                              className="appearance-none bg-transparent italic text-[#2563eb] font-['Open_Sans:SemiBold',sans-serif] text-[15px] cursor-pointer focus:outline-none pr-[14px] hover:underline"
                            >
                              {OPERATOR_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                            <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" width="8" height="6" viewBox="0 0 8 6" fill="none">
                              <path d="M1 1L4 4L7 1" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span>{r.values.join(", ")}</span>
                        </span>
                      );
                    })() : conditionRows.map((r, ci) => (
                      <span key={ci}>
                        {ci > 0 && <span className="font-['Open_Sans:Bold',sans-serif] text-[#627d98] mx-[8px]">&amp;</span>}
                        <span className="italic text-[#2563eb] mr-[6px]">{r.operator}</span>
                        {r.values.join(", ")}
                      </span>
                    ))}
                  </span>
                  <div className="flex items-center gap-[2px] shrink-0 ml-[12px]">
                    <button className="p-[6px] hover:bg-[#eef2f7] rounded-[6px] transition-colors" onClick={() => setPriorityRuleState({ groupIndex: gi, mode: "edit" })}>
                      <svg width="18" height="18" viewBox="0 0 19.4542 20" fill="none">
                        <path d={svgPaths.p306d88f0} fill="#334E68" />
                      </svg>
                    </button>
                    <button
                      className="p-[6px] hover:bg-[#eef2f7] rounded-[6px] transition-colors"
                      onClick={() => setRuleGroups((prev) => prev.map((g, i) =>
                        i === gi
                          ? { ...g, rows: g.rows.map((r) => r.isValueRow ? r : { ...r, values: [], expanded: false }) }
                          : g
                      ))}
                    >
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                        <path d={svgPaths.p4c48400} fill="#334E68" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })()}
            {/* Separate white row for each "Add value" row */}
            {group.rows.map((r, ri) => !r.isValueRow || (r.values.length === 0 && !r.extraPairs?.length) ? null : (
              <div key={ri} className={`flex items-center justify-between px-[40px] py-[14px] border-b border-[#e5e7eb] transition-colors ${activeGroup === gi * 100 + ri ? "bg-[#f9eafc]" : "bg-white hover:bg-[#fafbfc]"}`}>
                <span
                  className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] leading-[1.5] text-[#102a43] flex-1 min-w-0 cursor-text truncate"
                  onMouseDown={() => setActiveGroup(gi * 100 + ri)}
                  onBlur={() => setActiveGroup(null)}
                  tabIndex={0}
                >
                  {[{ field: r.field, values: r.values, operator: r.operator }, ...(r.extraPairs ?? [])].map((pair, pi) => (
                    <span key={pi}>
                      {pi > 0 && <span className="font-['Open_Sans:Bold',sans-serif] text-[#627d98] mx-[8px]">&amp;</span>}
                      <span className="italic text-[#2563eb] mr-[6px]">{pair.operator ?? r.operator}</span>
                      {pair.values.join(", ")}
                    </span>
                  ))}
                </span>
                <div className="flex items-center gap-[2px] shrink-0 ml-[12px]">
                  <button className="p-[6px] hover:bg-[#eef2f7] rounded-[6px] transition-colors" onClick={() => openMatrixFor(gi)}>
                    <svg width="18" height="18" viewBox="0 0 19.4542 20" fill="none">
                      <path d={svgPaths.p306d88f0} fill="#334E68" />
                    </svg>
                  </button>
                  <button className="p-[6px] hover:bg-[#eef2f7] rounded-[6px] transition-colors" onClick={() => deleteRow(gi, ri)}>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                      <path d={svgPaths.p4c48400} fill="#334E68" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Create rule */}
        <div className="bg-white px-[24px] py-[16px] border-b border-[#e5e7eb]">
          <button
            className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#00a0ff] uppercase tracking-wide hover:text-[#0090e8] transition-colors flex items-center gap-[6px]"
            onClick={() => setPopup({ type: "newRulePicker" })}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Create rule
          </button>
        </div>

        {/* Footer */}
        <div className="bg-[#f4f7fb] flex items-center justify-between px-[24px] py-[16px]">
          <div className="flex items-center gap-[4px]">
            <button className="p-[8px] hover:bg-[#e4ecf4] rounded-[6px] transition-colors" title="Delete">
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                <path d={svgPaths.p4c48400} fill="#EF4E4E" />
              </svg>
            </button>
            <button className="p-[8px] hover:bg-[#e4ecf4] rounded-[6px] transition-colors" title="Save">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                <path d={svgPaths.p3b80c380} fill="#334E68" />
              </svg>
            </button>
            <button className="p-[8px] hover:bg-[#e4ecf4] rounded-[6px] transition-colors" title="Duplicate">
              <svg width="19" height="22" viewBox="0 0 19 22" fill="none">
                <path d={svgPaths.p10e56200} fill="#334E68" />
              </svg>
            </button>
          </div>
          <button
            onClick={onClose}
            className="bg-[#00a0ff] text-white font-['Open_Sans:Bold',sans-serif] text-[15px] px-[32px] py-[10px] rounded-[6px] hover:bg-[#0090e8] active:bg-[#0080d0] transition-colors shadow-[0px_2px_4px_rgba(0,160,255,0.25)]"
          >
            Done
          </button>
        </div>
      </div>

      {/* ── Floating Popups ── */}
      {popup?.type === "addValue" && (() => {
        const { groupIndex, fields, conditionIndex, accumulated } = popup;
        const currentField = fields[conditionIndex];
        const hasNext = conditionIndex < fields.length - 1;
        const showLabel = fields.length > 1;
        return (
          <div className="absolute left-[calc(100%+8px)] top-0 z-50">
            <ValuePickerPopup
              key={`addValue-${conditionIndex}`}
              field={currentField}
              initialSelected={[]}
              fieldLabel={showLabel ? currentField : undefined}
              onDone={(sel) => {
                if (accumulated.length > 0) {
                  // flush all accumulated + current into ONE combined row
                  const first = accumulated[0];
                  const extra = [...accumulated.slice(1), { field: currentField, values: sel }];
                  handleAddValueDone(groupIndex, first.field, first.values, extra);
                } else {
                  handleAddValueDone(groupIndex, currentField, sel);
                }
              }}
              onNext={hasNext ? (sel) => {
                setPopup({ type: "addValue", groupIndex, fields, conditionIndex: conditionIndex + 1, accumulated: [...accumulated, { field: currentField, values: sel }] });
              } : undefined}
            />
          </div>
        );
      })()}
      {popup?.type === "value" && (() => {
        const { groupIndex, rowIndex, editFields, editConditionIndex = 0, editAccumulated = [], editMode } = popup;
        if (editFields && editFields.length > 1) {
          const currentPair = editFields[editConditionIndex];
          const hasNext = editConditionIndex < editFields.length - 1;
          return (
            <div className="absolute left-[calc(100%+8px)] top-0 z-50">
              <ValuePickerPopup
                key={`value-edit-${editConditionIndex}`}
                field={currentPair.field}
                initialSelected={currentPair.values}
                fieldLabel={currentPair.field}
                onNext={hasNext ? (sel) => {
                  setPopup({ type: "value", groupIndex, rowIndex, editFields, editConditionIndex: editConditionIndex + 1, editAccumulated: [...editAccumulated, { field: currentPair.field, values: sel }], editMode });
                } : undefined}
                onDone={(sel) => {
                  const allAccumulated = [...editAccumulated, { field: currentPair.field, values: sel }];
                  if (editMode === "splitRows") {
                    handleMultiConditionEditDone(groupIndex, allAccumulated);
                  } else {
                    const first = allAccumulated[0];
                    const extra = allAccumulated.slice(1);
                    handleValueDone(groupIndex, rowIndex, first.values, extra);
                  }
                }}
              />
            </div>
          );
        }
        return (
          <div className="absolute left-[calc(100%+8px)] top-0 z-50">
            <ValuePickerPopup
              field={ruleGroups[groupIndex]?.rows[rowIndex]?.field ?? "Contact Title"}
              initialSelected={ruleGroups[groupIndex]?.rows[rowIndex]?.values ?? []}
              onDone={(sel) => handleValueDone(groupIndex, rowIndex, sel)}
            />
          </div>
        );
      })()}
      {popup?.type === "conditionPicker" && (
        <div className="absolute left-[calc(100%+8px)] top-0 z-50">
          <ConditionPickerPopup onSelect={(field) => setPopup({ type: "conditionValue", field, groupIndex: popup.groupIndex })} />
        </div>
      )}
      {popup?.type === "conditionValue" && (
        <div className="absolute left-[calc(100%+8px)] top-0 z-50">
          <ValuePickerPopup
            field={popup.field}
            initialSelected={[]}
            onBack={() => setPopup({ type: "conditionPicker", groupIndex: popup.groupIndex })}
            onDone={(sel) => handleConditionValueDone(popup.groupIndex, popup.field, sel)}
          />
        </div>
      )}
      {popup?.type === "newRulePicker" && (
        <div className="absolute left-[calc(100%+8px)] top-0 z-50">
          <ConditionPickerPopup onSelect={(field) => setPopup({ type: "newRuleConditionValue", field })} />
        </div>
      )}
      {popup?.type === "newRuleConditionValue" && (
        <div className="absolute left-[calc(100%+8px)] top-0 z-50">
          <ValuePickerPopup
            field={popup.field}
            initialSelected={[]}
            onBack={() => setPopup({ type: "newRulePicker" })}
            onDone={(sel) => handleNewRuleConditionValueDone(popup.field, sel)}
          />
        </div>
      )}
      {priorityRuleState !== null && (() => {
        const state = priorityRuleState;
        const gi = state.groupIndex;
        const targetGroup = ruleGroups[gi];
        const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

        let initial: PriorityCondition[] = [];
        if (state.mode === "editValueRow" && targetGroup) {
          const row = targetGroup.rows[state.rowIndex];
          if (row) {
            const pairs = [{ field: row.field, values: row.values, operator: row.operator }, ...(row.extraPairs ?? [])];
            initial = pairs.map((p, idx) => ({
              id: idx + 1,
              field: p.field,
              operator: cap(p.operator ?? row.operator),
              values: p.values,
            }));
          }
        } else if (targetGroup) {
          const condRows = targetGroup.rows.filter((r) => !r.isValueRow);
          initial = condRows.map((r, idx) => ({
            id: idx + 1,
            field: r.field,
            operator: cap(r.operator),
            values: state.mode === "addValues" ? [] : r.values,
          }));
        }

        return (
          <PriorityRulePopup
            initialConditions={initial}
            onClose={() => setPriorityRuleState(null)}
            onDone={(conds) => {
              setRuleGroups((prev) => prev.map((g, i) => {
                if (i !== gi) return g;
                if (state.mode === "editValueRow") {
                  const [first, ...rest] = conds;
                  if (!first) return g;
                  return {
                    ...g,
                    rows: g.rows.map((row, ri) => ri === state.rowIndex ? {
                      ...row,
                      field: first.field,
                      operator: first.operator.toLowerCase(),
                      values: first.values,
                      expanded: true,
                      extraPairs: rest.length > 0 ? rest.map((c) => ({ field: c.field, values: c.values, operator: c.operator.toLowerCase() })) : undefined,
                    } : row),
                  };
                }
                if (state.mode === "addValues") {
                  const [first, ...rest] = conds;
                  if (!first) return g;
                  const newValueRow: ConditionRow = {
                    field: first.field,
                    operator: first.operator.toLowerCase(),
                    values: first.values,
                    expanded: true,
                    isValueRow: true,
                    extraPairs: rest.length > 0 ? rest.map((c) => ({ field: c.field, values: c.values, operator: c.operator.toLowerCase() })) : undefined,
                  };
                  return { ...g, rows: [...g.rows, newValueRow], groupExpanded: true };
                }
                const valueRows = g.rows.filter((r) => r.isValueRow);
                const newCondRows: ConditionRow[] = conds.map((c) => ({
                  field: c.field,
                  operator: c.operator.toLowerCase(),
                  values: c.values,
                  expanded: true,
                }));
                return { ...g, rows: [...newCondRows, ...valueRows], groupExpanded: true };
              }));
              setPriorityRuleState(null);
            }}
          />
        );
      })()}
      {advancedRuleGroupIndex !== null && <AdvancedRulePopup rule={advRule} setRule={setAdvRule} onClose={() => setAdvancedRuleGroupIndex(null)} />}
      {matrixRuleGroupIndex !== null && (
        <MatrixRulePopup
          rule={advRule}
          setRule={setAdvRule}
          onClose={() => setMatrixRuleGroupIndex(null)}
          onDone={(updated) => {
            setRuleGroups((prev) =>
              prev.map((g, i) => (i === matrixRuleGroupIndex ? advancedRuleToRuleGroup(updated) : g)),
            );
          }}
        />
      )}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [showRuleBuilder, setShowRuleBuilder] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState<"Sections" | "Board">("Board");

  const caseStudies = [
    { img: imgUnsplash8MikJ83LmSq, title: "Big Data is a big deal for marketing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
    { img: imgUnsplash774SCxd0DDu, title: "Researchers and Physicians Insights Using Equitier", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
    { img: imgUnsplashIrRbSnd5EUc, title: "Case Study: how Marketing One is winning with Predictive", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
    { img: imgUnsplashHpjSkU2Uysu, title: "How to Handle Big Data, Before It Handles You", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
  ];

  const bigData = [
    { img: imgUnsplash5FNmWej4TAa, title: "Power Marketing efficiency with data driven insights", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
    { img: imgUnsplashEveI7MOcSmw, title: "Big Data is a big deal for marketing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
    { img: imgUnsplashQwtCeJ5CLYs, title: "Complete data infrastructure", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
    { img: imgUnsplashHvSrCVecVi, title: "Researchers and Physicians Insights Using Equitier", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
  ];

  const techDive = [
    { img: imgUnsplashNApaSgkzaxg, title: "How to Handle Big Data, Before It Handles You", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
    { img: imgUnsplashTR0JvlsmCuQ, title: "Researchers and Physicians Insights Using ModoMind", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
    { img: imgUnsplashNpxXWgQ33Zq, title: "Case Study: how Marketing One is winning with Predictive", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
    { img: imgUnsplashPypeCEaJeZy, title: "Power Marketing efficiency with data driven insights", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida gravida imperd integer aenean rhoncus..." },
  ];

  const teamMembers = [
    { name: "Account Director", role: "Account Director", quote: '"I lead the team to ensure we are all focus on your business value and deliver on it effectively"', img: imgUnsplashD2MsDujJl2G },
    { name: "Jerry Wallbach", role: "Solution Engineer", quote: '"I work with your team to ensure that the requirements are completely met and solution is feasible"', img: imgUnsplashD2MsDujJl2G1 },
    { name: "Yulia Schropova", role: "Architect", quote: '"I design the technical architecture that ensure service level, performance and cost"', img: imgUnsplashD2MsDujJl2G2 },
  ];

  return (
    <div className="bg-white min-h-screen w-full font-['Open_Sans:Regular',sans-serif]">

      {/* ── Folloze Editor Bar ──────────────────────────────────────────── */}
      <div className="bg-white h-[60px] w-full shadow-[0px_1px_3px_rgba(17,24,39,0.1)] flex items-center justify-between px-[24px] relative z-50">
        {/* Yellow bar at top */}
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[#f7c948]" />

        {/* Left: Back + Undo/Redo + Page name */}
        <div className="flex items-center gap-[16px] mt-[5px]">
          <button className="hover:opacity-70 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p1efcb880} fill="#102A43" />
            </svg>
          </button>
          <div className="w-[1px] h-[40px] bg-[#BCCCDC]" />
          <div className="flex items-center gap-[16px]">
            <button className="hover:opacity-70 transition-opacity">
              <svg width="20" height="9" viewBox="0 0 20.47 9" fill="none">
                <path d={svgPaths.p39913700} fill="#102A43" />
              </svg>
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <svg width="20" height="9" viewBox="0 0 20.46 9" fill="none">
                <path d={svgPaths.p127bb400} fill="#102A43" />
              </svg>
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <svg width="18" height="13" viewBox="0 0 17.6 13.4" fill="none">
                <path d={svgPaths.p24a63700} fill="#00A0FF" />
              </svg>
            </button>
          </div>
          <div className="w-[1px] h-[40px] bg-[#BCCCDC]" />
          <div className="flex items-center gap-[18px]">
            <div className="flex flex-col items-center gap-[2px] relative">
              <div className="flex items-center gap-[8px]">
                <div className="bg-[#d9e2ec] flex items-center gap-[4px] px-[8px] py-[2px] rounded-[999px]">
                  <span className="font-['Open_Sans:Bold',sans-serif] text-[14px] text-[#102a43]">2</span>
                  <svg width="10" height="13" viewBox="0 0 10.6667 13.3333" fill="none">
                    <path d={svgPaths.p38c63970} fill="black" />
                  </svg>
                </div>
                <div className="flex items-center gap-[2px] cursor-pointer">
                  <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#102a43]">Registration page</span>
                  <svg width="7" height="4" viewBox="0 0 7.5 3.75" fill="none">
                    <path d="M0 0L3.75 3.75L7.5 0H0Z" fill="#334E68" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-[40px] bg-[#BCCCDC]" />
          <button className="hover:opacity-70 transition-opacity">
            <svg width="18" height="19" viewBox="0 0 18 19.07" fill="none">
              <path d={svgPaths.p21491280} fill="#102A43" />
            </svg>
          </button>
        </div>

        {/* Center: page title + published badge */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-[4px] mt-[5px]">
          <span className="font-['Open_Sans:SemiBold',sans-serif] text-[12px] text-[#627d98]">Security – Office 365-shay</span>
          <div className="bg-[#00a0ff] px-[8px] rounded-[999px]">
            <span className="font-['Open_Sans:SemiBold',sans-serif] text-[11px] text-white">Published</span>
          </div>
        </div>

        {/* Right: toggle + personalization */}
        <div className="flex items-center gap-[12px] mt-[5px]">
          <div className="bg-[#d9e2ec] flex items-center gap-[2px] p-[2px] rounded-[999px]">
            {(["Sections", "Board"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSection(tab)}
                className={`px-[10px] h-[24px] rounded-[999px] font-['Open_Sans:Bold',sans-serif] text-[13px] transition-colors ${
                  activeSection === tab ? "bg-white text-[#102a43]" : "text-[#334e68]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="bg-[#f5e1f7] text-[#7c1a87] font-['Open_Sans:SemiBold',sans-serif] text-[14px] px-[14px] py-[2px] rounded-[54px] hover:bg-[#eac9f0] transition-colors">
            Personalization mode
          </button>
          <div className="relative">
            <div className="bg-[#d9e2ec] h-[22px] w-[44px] rounded-[15px] flex items-center px-[2px]">
              <div className="bg-white w-[18px] h-[18px] rounded-full shadow-sm flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 22 22" fill="none">
                  <path clipRule="evenodd" d={svgPaths.p27a63c00} fill="#A23DAD" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="absolute -top-[4px] -right-[4px] w-[10px] h-[10px] bg-[#EF4E4E] rounded-full" />
          </div>
        </div>
      </div>

      {/* ── Board Banner ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#e5e7eb] flex items-center gap-[16px] px-[20px] py-[8px] relative">
        {/* Drag handle */}
        <div className="flex items-center">
          <div className="bg-[#627d98] h-[40px] w-[24px] rounded-l-[6px] flex items-center justify-center cursor-grab">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d={svgPaths.p1b8d4580} fill="white" />
            </svg>
          </div>
          <div className="bg-white shadow-md h-[40px] flex items-center gap-[4px] px-[6px] rounded-r-[6px] border border-[#e5e7eb]">
            <button className="p-[4px] hover:bg-[#f3f4f6] rounded">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d={svgPaths.pd0c500} fill="#334E68" />
              </svg>
            </button>
            <button className="bg-white p-[4px] hover:bg-[#f3f4f6] rounded">
              <svg width="18" height="18" viewBox="0 0 18.0025 18.0025" fill="none">
                <path d={svgPaths.p2cdb92f0} fill="#334E68" />
              </svg>
            </button>
          </div>
        </div>
        {/* Logos */}
        <img src={imgSg2Pjswl6Kpridi262P91} alt="logo" className="h-[28px] object-contain" />
        <div className="w-[1px] h-[20px] bg-[#e5e7eb]" />
        <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#0c111d] flex-1">
          AIA and ServiceNow Growth with a focus on people
        </p>
        {/* Rule builder trigger button */}
        <button
          onClick={() => setShowRuleBuilder(true)}
          className="bg-[#a23dad] text-white font-['Open_Sans:SemiBold',sans-serif] text-[12px] px-[10px] py-[4px] rounded-[4px] hover:bg-[#8e2f9c] transition-colors flex items-center gap-[6px]"
        >
          <svg width="12" height="12" viewBox="0 0 22 22" fill="none">
            <path clipRule="evenodd" d={svgPaths.p27a63c00} fill="white" fillRule="evenodd" />
          </svg>
          Personalization Rule
        </button>
      </div>

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <div className="relative h-[350px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ maskImage: `url('${imgUnsplashUnRkg2JH1J0}')`, maskSize: "cover", maskPosition: "center" }}
        >
          <img src={imgUnsplashUnRkg2JH1J1} alt="hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        {/* Fallback bg if mask doesn't render */}
        <img src={imgUnsplashUnRkg2JH1J1} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover -z-10" />
        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="relative z-10 flex flex-col gap-[20px] items-start px-[80px] pt-[80px]">
          <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[1.4] text-white tracking-[-0.2px] max-w-[700px]">
            Knowledge is power
          </h1>
          <div className="flex items-center gap-[16px]">
            <button className="bg-[#f47441] text-white font-['Open_Sans:Bold',sans-serif] text-[15px] px-[20px] py-[9px] rounded-[4px] hover:bg-[#e06535] transition-colors">
              Explore Solutions
            </button>
            <button className="bg-white text-[#f47441] font-['Open_Sans:Bold',sans-serif] text-[15px] px-[20px] py-[9px] rounded-[4px] shadow-md hover:bg-[#fef5f1] transition-colors">
              Request a Demo
            </button>
          </div>
        </div>
      </div>

      {/* ── Browse/Search Bar ─────────────────────────────────────────────── */}
      <div className="bg-[#f47441] px-[24px] py-[10px]">
        <div className="max-w-[1376px] mx-auto flex items-center justify-between">
          <button className="flex items-center gap-[8px] text-white font-['Open_Sans:Bold',sans-serif] text-[15px]">
            BROWSE BY CATEGORY
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d={svgPaths.p38adf480} fill="white" />
            </svg>
          </button>
          <div className="bg-white flex items-center gap-[6px] h-[36px] px-[12px] rounded-[6px] w-[240px] border border-[#6b7280]">
            <svg width="16" height="16" viewBox="0 0 15.9877 15.9885" fill="none">
              <path clipRule="evenodd" d={svgPaths.p2efedf00} fill="#374151" fillRule="evenodd" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#6b7280] bg-transparent focus:outline-none flex-1 min-w-0"
            />
          </div>
        </div>
      </div>

      {/* ── Our Products section ─────────────────────────────────────────── */}
      <div className="py-[48px] px-[80px] bg-white">
        <div className="max-w-[1376px] mx-auto flex flex-col items-center gap-[10px] mb-[40px]">
          <p className="font-['Open_Sans:Bold',sans-serif] text-[40px] leading-[1.4] text-[#0c111d]">Our products made for you</p>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[1.5] text-[#0c111d]">Learn what's new in the financial world</p>
        </div>

        <div className="max-w-[1376px] mx-auto flex flex-col gap-[48px]">
          <ContentSection title="Case Studies" cards={caseStudies} />
          <ContentSection title="Learn about Big Data" cards={bigData} />
          <ContentSection title="Technology deep dive" cards={techDive} />
        </div>
      </div>

      {/* ── Meet your Account Team ───────────────────────────────────────── */}
      <div className="bg-[#f3f4f6] py-[56px] px-[80px]">
        <div className="max-w-[1376px] mx-auto">
          <h2 className="font-['Open_Sans:Bold',sans-serif] text-[40px] leading-[1.4] text-[#0c111d] text-center mb-[48px]">
            Meet your Account Team
          </h2>
          <div className="flex items-start gap-[40px] justify-center">
            {teamMembers.map((m, i) => (
              <div key={i} className="flex flex-col items-center gap-[16px] max-w-[360px]">
                <div className="w-[110px] h-[110px] rounded-full overflow-hidden shrink-0">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-center gap-[4px]">
                  <p className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#0c111d]">{m.name}</p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#0c111d]">{m.role}</p>
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] leading-[1.5] text-[#374151] text-center">{m.quote}</p>
                <button className="font-['Open_Sans:Bold',sans-serif] text-[15px] text-[#f47441] hover:underline">
                  Check my LinkedIn
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Demo Videos ─────────────────────────────────────────────────── */}
      <div className="py-[48px] px-[80px] bg-white">
        <div className="max-w-[1376px] mx-auto flex gap-[32px]">
          {/* Large video */}
          <div className="relative w-[580px] h-[260px] shrink-0 rounded-[4px] overflow-hidden">
            <img src={imgUnsplashShrXn8S8Qu} alt="Platform Demo" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-[20px] left-[20px]">
              <p className="font-['Open_Sans:Bold',sans-serif] text-[11px] text-[#f47441] uppercase mb-[4px]">Demo</p>
              <p className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#0c111d]">Platform Demo</p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#6b7280]">3 min</p>
            </div>
            <button className="absolute inset-0 flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 66.6667 66.6667" fill="none">
                <path d={svgPaths.p3a336f00} fill="white" />
              </svg>
            </button>
          </div>
          {/* Small videos */}
          <div className="flex flex-col gap-[16px] flex-1">
            {[
              { img: imgUnsplashMcSDtbWxuzu, label: "Dashboard Demo", duration: "3 min" },
              { img: imgUnsplashJkuTrJ4VK00, label: "Data Integration", duration: "3 min" },
              { img: imgUnsplashEveI7MOcSmw1, label: "ResearchNow", duration: "8 min" },
            ].map((v, i) => (
              <div key={i} className="relative flex items-center gap-[16px] bg-[#f3f4f6] rounded-[4px] overflow-hidden h-[72px]">
                <div className="relative w-[100px] h-[72px] shrink-0">
                  <img src={v.img} alt={v.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 33.3333 33.3333" fill="none">
                      <path d={svgPaths.p2341f680} fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-['Open_Sans:Bold',sans-serif] text-[11px] text-[#f47441] uppercase">Demo</p>
                  <p className="font-['Open_Sans:Bold',sans-serif] text-[15px] text-[#0c111d]">{v.label}</p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#6b7280]">{v.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How to Measure ROI ────────────────────────────────────────────── */}
      <div className="bg-[#f47441] py-[56px] px-[80px]">
        <div className="max-w-[1376px] mx-auto">
          <h2 className="font-['Open_Sans:Bold',sans-serif] text-[40px] text-black text-center mb-[40px]">How to Measure ROI</h2>
          <div className="flex gap-[40px] items-start">
            {[
              { icon: svgPaths.p3d88e000, title: "Drive top line with better targeting and execution" },
              { icon: svgPaths.p39e1df80, title: "Boost competitive advantage with better insights delivers" },
              { icon: svgPaths.p1e09f730, title: "Improve effectiveness and operational efficiency" },
              { icon: svgPaths.p2dfa4680, title: "Position as a thought leader to drive industry recognition" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-[16px] flex-1">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                  <path d={item.icon} fill="black" />
                </svg>
                <p className="font-['Open_Sans:Bold',sans-serif] text-[17px] leading-[1.5] text-[#0c111d]">{item.title}</p>
                <button className="flex items-center gap-[8px] font-['Open_Sans:Bold',sans-serif] text-[15px] text-[#0c111d] hover:underline">
                  Learn More
                  <svg width="18" height="8" viewBox="0 0 20 10" fill="none">
                    <path d="M15 1L19 5M19 5L15 9M19 5H1" stroke="#0C111D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Learn from a customer CTA ─────────────────────────────────────── */}
      <div className="relative py-[80px] px-[80px] overflow-hidden">
        <img src={imgLinkedinSalesSolutions2} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center gap-[24px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[44px] leading-[1.4] text-white text-center max-w-[700px]">
            Learn form a customer
          </h2>
          <div className="flex items-center gap-[16px]">
            <button className="bg-[#f47441] text-white font-['Open_Sans:Bold',sans-serif] text-[15px] px-[20px] py-[9px] rounded-[4px] shadow-md hover:bg-[#e06535] transition-colors">
              Talk with an expert
            </button>
            <button className="bg-white text-[#f47441] font-['Open_Sans:Bold',sans-serif] text-[15px] px-[20px] py-[9px] rounded-[4px] shadow-md hover:bg-[#fef5f1] transition-colors">
              Talk to a Customer
            </button>
          </div>
        </div>
      </div>

      {/* ── Rule Builder Overlay ─────────────────────────────────────────── */}
      {showRuleBuilder && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <div className="pointer-events-auto absolute left-[191px] top-[146px]">
            <RuleBuilderPanel onClose={() => setShowRuleBuilder(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

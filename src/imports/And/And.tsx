function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#102a43] text-[14px] whitespace-nowrap">Account Employee Range [6S]</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#102a43] text-[14px] whitespace-nowrap">Account Buying Stage</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#102a43] text-[14px] whitespace-nowrap">Account Domain</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#102a43] text-[14px] whitespace-nowrap">Account Country</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#102a43] text-[14px] whitespace-nowrap">Account Industry [6S]</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#102a43] text-[14px] whitespace-nowrap">Account Name</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#102a43] text-[14px] whitespace-nowrap">Account Profile Fit [6S]</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[232px]">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <div className="absolute bg-[#ddf2ff] h-[36px] left-[-16px] top-[156px] w-[264px]" />
      <div className="absolute bg-white h-[36px] left-[-16px] top-[197px] w-[264px]" />
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-end px-[16px] relative shrink-0">
      <Frame8 />
    </div>
  );
}

export default function And() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_10px_7.5px_rgba(17,24,39,0.1),0px_4px_3px_rgba(17,24,39,0.05)] flex flex-col items-center py-[16px] relative rounded-[6px] size-full" data-name="and">
      <Frame9 />
    </div>
  );
}
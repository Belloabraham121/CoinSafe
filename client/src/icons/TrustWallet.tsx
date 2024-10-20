import * as React from "react";

function TrustWallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <g filter="url(#prefix__filter0_b_189_5584)">
        <rect width={32} height={32} rx={16} fill="#1E1E1E" fillOpacity={0.6} />
        <rect
          x={0.5}
          y={0.5}
          width={31}
          height={31}
          rx={15.5}
          stroke="#fff"
          strokeOpacity={0.02}
        />
        <path
          d="M22.45 15.99l.684-.803-.298-.218.476-.436-.367-.278.476-.357-.307-.238.496-2.42L22.856 9m0 0l-4.838 1.795h-4.036L9.144 9l-.754 2.24.506 2.42-.317.238.485.357-.366.278.475.436-.297.218.684.803-1.04 3.213.96 3.281 3.382-.932.654.536 1.339.912h2.29l1.339-.912.654-.536 3.391.932.972-3.282-1.051-3.212"
          fill="#F5841F"
        />
        <path
          d="M22.856 9l-5.939 4.373 1.1-2.578L22.858 9zM9.144 9l5.89 4.412-1.052-2.617L9.144 9zM20.724 19.143l-1.586 2.4 3.391.931.972-3.281-2.777-.05zM8.52 19.193l.96 3.281 3.382-.931-1.577-2.4-2.766.05z"
          fill="#E27625"
        />
        <path
          d="M12.683 15.078l-.942 1.418 3.352.149-.11-3.59-2.3 2.023zM19.326 15.078l-2.34-2.062-.069 3.629 3.351-.15-.942-1.417zM12.862 21.543l2.033-.972-1.755-1.349-.278 2.32zM17.115 20.57l2.023.973-.278-2.32-1.745 1.348z"
          fill="#E27625"
        />
        <path
          d="M19.138 21.543l-2.023-.972.169 1.309-.02.555 1.874-.892zM12.862 21.543l1.884.892-.01-.555.159-1.31-2.033.973z"
          fill="#D7C1B3"
        />
        <path
          d="M14.775 18.35l-1.675-.486 1.19-.545.486 1.03zM17.224 18.35l.496-1.031 1.19.545-1.686.486z"
          fill="#2F343B"
        />
        <path
          d="M12.862 21.543l.297-2.4-1.874.05 1.577 2.35zM18.85 19.143l.288 2.4 1.586-2.35-1.873-.05zM20.268 16.496l-3.35.149.306 1.705.496-1.031 1.19.545 1.358-1.368zM13.1 17.864l1.19-.545.485 1.03.318-1.704-3.352-.15 1.359 1.369z"
          fill="#CC6228"
        />
        <path
          d="M11.741 16.496l1.398 2.726-.04-1.358-1.358-1.368zM18.91 17.864l-.05 1.358 1.408-2.726-1.358 1.368zM15.093 16.645l-.318 1.705.397 2.022.09-2.657-.17-1.07zM16.917 16.645l-.169 1.06.08 2.668.396-2.023-.307-1.706z"
          fill="#E27625"
        />
        <path
          d="M17.224 18.35l-.396 2.022.287.199 1.745-1.349.05-1.358-1.686.486zM13.1 17.864l.04 1.358 1.755 1.349.277-.199-.397-2.022-1.675-.486z"
          fill="#F5841F"
        />
        <path
          d="M17.264 22.435l.02-.555-.159-.13h-2.25l-.14.13.01.555-1.883-.892.654.535 1.339.922h2.29l1.339-.922.654-.535-1.874.892z"
          fill="#C0AD9E"
        />
        <path
          d="M17.115 20.57l-.287-.198h-1.656l-.278.199-.158 1.309.139-.13h2.25l.159.13-.169-1.31z"
          fill="#2F343B"
        />
        <path
          d="M23.114 13.66l.496-2.42L22.856 9l-5.74 4.224 2.21 1.854 3.124.912.684-.803-.298-.218.476-.426-.367-.288.476-.357-.307-.238zM8.39 11.24l.506 2.42-.317.238.476.367-.367.277.476.427-.298.218.694.803 3.123-.912 2.211-1.854L9.144 9l-.754 2.24z"
          fill="#763E1A"
        />
        <path
          d="M22.45 15.99l-3.124-.912.942 1.418-1.408 2.726 1.864-.03h2.777L22.45 15.99zM12.683 15.078l-3.123.912-1.04 3.203h2.765l1.854.03-1.397-2.727.941-1.418zM16.917 16.645l.198-3.421.903-2.43h-4.036l.913 2.43.198 3.42.08 1.071v2.657h1.655l.01-2.657.08-1.07z"
          fill="#F5841F"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_b_189_5584"
          x={-2.3}
          y={-2.3}
          width={36.6}
          height={36.6}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1.15} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_189_5584"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_189_5584"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoTrustWallet = React.memo(TrustWallet);
export default MemoTrustWallet;

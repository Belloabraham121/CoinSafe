import * as React from "react";

function CalenderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 17 16" fill="none" {...props}>
      <path
        d="M5.833 3.833a.504.504 0 01-.5-.5v-2c0-.273.227-.5.5-.5.274 0 .5.227.5.5v2c0 .274-.226.5-.5.5zM11.167 3.833a.504.504 0 01-.5-.5v-2c0-.273.226-.5.5-.5.273 0 .5.227.5.5v2c0 .274-.227.5-.5.5zM6.167 9.667a.664.664 0 01-.254-.054.688.688 0 01-.22-.14A.688.688 0 015.5 9c0-.087.02-.173.053-.253a.77.77 0 01.14-.22.688.688 0 01.22-.14.68.68 0 01.727.14c.12.126.193.3.193.473 0 .04-.006.087-.013.133a.424.424 0 01-.04.12.505.505 0 01-.06.12c-.02.034-.053.067-.08.1a.701.701 0 01-.473.194zM8.5 9.667a.664.664 0 01-.253-.054.688.688 0 01-.22-.14A.688.688 0 017.833 9c0-.087.02-.173.054-.253a.77.77 0 01.14-.22.688.688 0 01.22-.14.668.668 0 01.726.14c.12.126.194.3.194.473 0 .04-.007.087-.014.133a.423.423 0 01-.04.12.505.505 0 01-.06.12c-.02.034-.053.067-.08.1a.701.701 0 01-.473.194zM10.833 9.667a.663.663 0 01-.253-.054.687.687 0 01-.22-.14l-.08-.1a.502.502 0 01-.06-.12.422.422 0 01-.04-.12.997.997 0 01-.013-.133c0-.173.073-.347.193-.473a.687.687 0 01.22-.14.666.666 0 01.727.14c.12.126.193.3.193.473 0 .04-.007.087-.013.133a.422.422 0 01-.04.12.502.502 0 01-.06.12c-.02.034-.054.067-.08.1a.7.7 0 01-.474.194zM6.167 12a.662.662 0 01-.254-.053.77.77 0 01-.22-.14.701.701 0 01-.193-.474c0-.086.02-.173.053-.253a.623.623 0 01.14-.22.698.698 0 01.947 0c.12.127.193.3.193.473a.701.701 0 01-.193.474.701.701 0 01-.473.193zM8.5 12a.701.701 0 01-.473-.193.701.701 0 01-.194-.474c0-.086.02-.173.054-.253a.623.623 0 01.14-.22.698.698 0 01.946 0c.06.06.107.133.14.22.034.08.054.167.054.253a.701.701 0 01-.194.474A.701.701 0 018.5 12zM10.833 12a.7.7 0 01-.473-.193.622.622 0 01-.14-.22.662.662 0 01-.053-.254c0-.086.02-.173.053-.253a.622.622 0 01.14-.22.665.665 0 01.727-.14c.04.013.08.033.12.06.033.02.066.053.1.08a.7.7 0 01.193.473.7.7 0 01-.193.474.7.7 0 01-.474.193zM14.167 6.56H2.833a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h11.334c.273 0 .5.227.5.5s-.227.5-.5.5z"
        fill="#fff"
      />
      <path
        d="M11.167 15.167H5.833C3.4 15.167 2 13.767 2 11.333V5.667c0-2.434 1.4-3.834 3.833-3.834h5.334C13.6 1.833 15 3.233 15 5.667v5.666c0 2.434-1.4 3.834-3.833 3.834zM5.833 2.833C3.927 2.833 3 3.76 3 5.667v5.666c0 1.907.927 2.834 2.833 2.834h5.334c1.906 0 2.833-.927 2.833-2.834V5.667c0-1.907-.927-2.834-2.833-2.834H5.833z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoCalenderIcon = React.memo(CalenderIcon);
export default MemoCalenderIcon;

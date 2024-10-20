import * as React from "react";

function Beta(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 21" fill="none" {...props}>
      <rect width={40} height={21} rx={10} fill="#00F2FE" fillOpacity={0.09} />
      <path
        d="M9.032 15V6.768h4.248c.472 0 .88.084 1.224.252.344.16.608.388.792.684.192.296.288.648.288 1.056 0 .312-.056.6-.168.864a1.8 1.8 0 01-.468.66c-.2.176-.428.308-.684.396v.048c.288.064.548.18.78.348.232.168.416.392.552.672.144.272.216.608.216 1.008 0 .536-.112.968-.336 1.296a1.949 1.949 0 01-.9.72A3.437 3.437 0 0113.28 15H9.032zm1.14-.984h3.096c.408 0 .74-.104.996-.312.256-.216.384-.572.384-1.068 0-.304-.056-.556-.168-.756a1.01 1.01 0 00-.492-.456c-.216-.104-.488-.156-.816-.156h-3v2.748zm0-3.72h2.892c.272 0 .508-.052.708-.156a1.28 1.28 0 00.648-1.128c0-.432-.116-.748-.348-.948-.232-.208-.54-.312-.924-.312h-2.976v2.544zm9.075 4.848c-.624 0-1.152-.116-1.584-.348-.424-.24-.748-.604-.972-1.092-.216-.488-.324-1.108-.324-1.86 0-.76.108-1.38.324-1.86.224-.488.552-.848.984-1.08.432-.24.972-.36 1.62-.36.592 0 1.088.116 1.488.348.4.224.7.564.9 1.02.208.448.312 1.012.312 1.692v.504h-4.536c.016.504.088.92.216 1.248.136.32.336.556.6.708.264.144.596.216.996.216.272 0 .508-.032.708-.096.208-.072.38-.172.516-.3.144-.128.252-.28.324-.456a1.68 1.68 0 00.12-.576h1.032a2.571 2.571 0 01-.192.936c-.12.28-.296.52-.528.72-.232.2-.516.356-.852.468-.336.112-.72.168-1.152.168zm-1.764-3.828h3.42c0-.352-.04-.648-.12-.888a1.475 1.475 0 00-.348-.588 1.206 1.206 0 00-.516-.324 1.872 1.872 0 00-.66-.108c-.368 0-.68.068-.936.204a1.351 1.351 0 00-.588.624c-.136.28-.22.64-.252 1.08zm6.814 3.828c-.328 0-.584-.06-.768-.18a1.077 1.077 0 01-.396-.492 1.823 1.823 0 01-.12-.66V9.576h-.816v-.888h.84l.192-1.764h.84v1.764h1.188v.888H24.07v4.08c0 .2.036.352.108.456.072.096.208.144.408.144h.672v.696c-.08.04-.176.072-.288.096a4.498 4.498 0 01-.348.06c-.112.024-.22.036-.324.036zm3.19 0c-.231 0-.463-.028-.695-.084a2.114 2.114 0 01-.648-.276c-.2-.128-.36-.304-.48-.528-.12-.232-.18-.52-.18-.864 0-.432.104-.788.312-1.068.208-.28.496-.496.864-.648.376-.16.82-.268 1.332-.324a13.489 13.489 0 011.668-.096v-.72c0-.232-.04-.432-.12-.6-.08-.168-.224-.296-.432-.384-.2-.096-.488-.144-.864-.144-.36 0-.648.048-.864.144-.208.088-.356.204-.444.348a.972.972 0 00-.12.48v.18h-1.02a.61.61 0 01-.012-.12v-.144c0-.384.104-.704.312-.96.216-.264.516-.46.9-.588a3.944 3.944 0 011.32-.204c.528 0 .968.076 1.32.228.36.152.628.368.804.648.184.28.276.616.276 1.008v3.42c0 .152.036.26.108.324.072.056.16.084.264.084h.468v.696a2.255 2.255 0 01-.372.12c-.136.04-.292.06-.468.06A.933.933 0 0130.2 15a.792.792 0 01-.312-.336 1.676 1.676 0 01-.144-.504h-.084c-.144.2-.328.376-.552.528-.216.144-.46.256-.732.336-.272.08-.568.12-.888.12zm.265-.888c.256 0 .496-.04.72-.12.232-.08.436-.192.612-.336.176-.152.316-.332.42-.54.104-.208.156-.436.156-.684v-.528c-.648 0-1.2.036-1.656.108-.456.072-.808.2-1.056.384-.24.184-.36.444-.36.78 0 .216.048.392.144.528.096.136.232.24.408.312.176.064.38.096.612.096z"
        fill="#FCFCFC"
      />
    </svg>
  );
}

const MemoBeta = React.memo(Beta);
export default MemoBeta;

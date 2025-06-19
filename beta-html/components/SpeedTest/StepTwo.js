import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { PieChart } from 'react-minimal-pie-chart';


export default function StepTwo() {  
  let dataDownload = [
    { title: 'Filled', value: 70, color: '#1afffc' },
    { title: 'Empty', value: 30, color: 'rgba(26, 255, 252, 0.3)' },
  ];
  let dataUpload = [
    { title: 'Filled', value: 50, color: '#bf71ff' },
    { title: 'Empty', value: 50, color: 'rgba(191, 113, 255, 0.3)' },
  ];
  return (
    <div>
    <div className="speed-test-infos">
      <div>
        <div className="info-item">
          <div className="bar">
            <div className="icon"></div>
          </div>
          <strong>PING</strong>
          <p>
            <strong>4</strong>
            ms
          </p>
        </div>
      </div>
      <div className="download">
        <div className="info-item">
          <div className="bar">
            <PieChart data={dataDownload} lineWidth={15} startAngle={-90} animate animationDuration={500} animationEasing="ease-out" />
            <div className="chart-icon"></div>
          </div>
          <strong><FormattedMessage id="download" /></strong>
          <p>
            <strong>10,52</strong>
            Mbps
          </p>
        </div>
      </div>
      <div className="upload">
        <div className="info-item">
          <div className="bar">
            <PieChart data={dataUpload} lineWidth={15} startAngle={-90} animate animationDuration={500} animationEasing="ease-out" />
            <div className="chart-icon"></div>
          </div>
          <strong><FormattedMessage id="upload" /></strong>
          <p>
            <strong>3,52</strong>
            Mbps
          </p>              
        </div>
      </div>
    </div>
    <div className="gauge-container">
      <div className="gauge gauge-active  js-gauge">
        <div className="mbps js-mpbs">0</div>
        <img src="./assets/images/gauge01.svg" alt="" className="part01" />
        <img src="./assets/images/gauge02.svg" alt="" className="part02" />
        <img src="./assets/images/gauge03.svg" alt="" className="part03" />
        <img src="./assets/images/gauge04.svg" alt="" className="part04" />
        <img src="./assets/images/gauge05.svg" alt="" className="part05" />
        <svg width="358" height="380" viewBox="0 0 723 758" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Gauge" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g xmlns="http://www.w3.org/2000/svg" id="Mbps-Txt" transform="translate(126.000000, 136.000000)">
                            <text id="0m" fontFamily="Roboto-Medium, Roboto" fontSize="30" fontWeight="400" fill="#FFFFFF">
                                <tspan x="32" y="371">0</tspan>
                                <tspan x="49.0507812" y="371" fontFamily="Roboto-Light, Roboto" fontSize="22" fontWeight="300">m</tspan>
                            </text>
                            <text id="1m" fontFamily="Roboto-Medium, Roboto" fontSize="30" fontWeight="400" fill="#FFFFFF">
                                <tspan x="0" y="249">1</tspan>
                                <tspan x="17.0507812" y="249" fontFamily="Roboto-Light, Roboto" fontSize="22" fontWeight="300">m</tspan>
                            </text>
                            <text id="75m" fontFamily="Roboto-Medium, Roboto" fontSize="30" fontWeight="400" fill="#FFFFFF">
                                <tspan x="418" y="250">75</tspan>
                                <tspan x="452.101562" y="250" fontFamily="Roboto-Light, Roboto" fontSize="22" fontWeight="300">m</tspan>
                            </text>
                            <text id="5m" fontFamily="Roboto-Medium, Roboto" fontSize="30" fontWeight="400" fill="#FFFFFF">
                                <tspan x="32" y="136">5</tspan>
                                <tspan x="49.0507812" y="136" fontFamily="Roboto-Light, Roboto" fontSize="22" fontWeight="300">m</tspan>
                            </text>
                            <text id="50m" fontFamily="Roboto-Medium, Roboto" fontSize="30" fontWeight="400" fill="#FFFFFF">
                                <tspan x="389" y="136">50</tspan>
                                <tspan x="423.101562" y="136" fontFamily="Roboto-Light, Roboto" fontSize="22" fontWeight="300">m</tspan>
                            </text>
                            <text id="10m" fontFamily="Roboto-Medium, Roboto" fontSize="30" fontWeight="400" fill="#FFFFFF">
                                <tspan x="109" y="62">10</tspan>
                                <tspan x="143.101562" y="62" fontFamily="Roboto-Light, Roboto" fontSize="22" fontWeight="300">m</tspan>
                            </text>
                            <text id="30m" fontFamily="Roboto-Medium, Roboto" fontSize="30" fontWeight="400" fill="#FFFFFF">
                                <tspan x="322" y="62">30</tspan>
                                <tspan x="356.101562" y="62" fontFamily="Roboto-Light, Roboto" fontSize="22" fontWeight="300">m</tspan>
                            </text>
                            <text id="20m" fontFamily="Roboto-Medium, Roboto" fontSize="30" fontWeight="400" fill="#FFFFFF">
                                <tspan x="210" y="28">20</tspan>
                                <tspan x="244.101562" y="28" fontFamily="Roboto-Light, Roboto" fontSize="22" fontWeight="300">m</tspan>
                            </text>
                            <text id="10,52" fontFamily="Roboto-Regular, Roboto" fontSize="71" fontWeight="normal" fill="#FFFFFF">
                                <tspan x="144.29541" y="451"></tspan>
                            </text>
                            <text id="Mbps" fontFamily="Roboto-Regular, Roboto" fontSize="25" fontWeight="normal" fill="#9B9B9B">
                                <tspan x="199.115723" y="492">Mbps</tspan>
                            </text>
                        </g>
                        <path xmlns="http://www.w3.org/2000/svg" d="M530.665212,500 C529.160866,500 527.891302,500.995652 527.473911,502.365217 L526.030435,507.13913 C526.013043,507.195652 526,507.265217 526,507.334783 C526,507.704348 526.295652,508 526.665217,508 C526.730434,508 526.795651,507.986957 526.860869,507.969565 L531.634776,506.517391 C533.00434,506.104348 534,504.830435 534,503.326087 C534.004338,501.491304 532.508688,500 530.665212,500 Z M563.122547,469 C556.37188,469 549.853854,469.293908 544.37659,472.861619 C541.486945,474.743443 539.087071,477.380447 537.152478,480.323604 C532.467009,480.609348 528.103973,482.985101 525.349015,486.846719 C524.973524,487.369221 524.895977,488.059088 525.140862,488.655067 C525.385748,489.255128 525.924495,489.683743 526.561196,489.785794 C528.246822,490.071538 530.116112,490.826717 532.001728,491.941116 C531.66297,493.190223 531.385433,494.402592 531.185444,495.541484 C531.079327,496.141545 531.275235,496.762017 531.707866,497.190632 L536.801476,502.280947 C537.15656,502.640167 537.634086,502.832024 538.127938,502.832024 C538.234054,502.832024 538.340171,502.82386 538.45037,502.799367 C539.585004,502.603429 540.801267,502.329932 542.050181,501.987039 C543.164409,503.877028 543.923553,505.746607 544.20517,507.432493 C544.315369,508.073375 544.743918,508.608123 545.339805,508.857128 C545.572446,508.955097 545.817331,509 546.062216,509 C546.445869,509 546.825441,508.877539 547.151955,508.653026 C551.012977,505.901725 553.388363,501.533932 553.669981,496.84774 C556.612684,494.912848 559.249281,492.512603 561.126733,489.622513 C564.697975,484.148485 565,477.360037 565,470.877743 C565,469.840902 564.159228,469 563.122547,469 Z M528,487.690837 C530.187711,485.36494 532.975017,483.74741 536,483 C534.854828,485.309163 533.893315,487.674104 533.093856,490 C531.381499,489.018327 529.669142,488.231873 528,487.690837 Z M546.305423,506 C545.763955,504.331984 544.976874,502.626181 544,500.909582 C546.333333,500.110661 548.688995,499.144399 551,498 C550.251994,501.02834 548.627592,503.813765 546.305423,506 Z M558.527301,487.847738 C554.360062,494.247114 545.379095,498.479875 537.94883,500 L534,496.05117 C535.515757,488.620905 539.752886,479.639938 546.152262,475.472699 C550.585959,472.585335 556.13791,472.074259 562,472 C561.925741,477.86209 561.414665,483.414041 558.527301,487.847738 Z M551.996089,485 C553.654498,485 555,483.657534 555,481.998043 C555,480.342466 553.658409,479 551.996089,479 C550.341591,479 549,480.342466 549,481.998043 C549,483.657534 550.341591,485 551.996089,485 Z" id="rocket_icon" fill="#FFFFFF" fillRule="nonzero"/>                
            </g>
        </svg>
        <img src="./assets/images/hand22x.png" alt="" className="part07 js-animate-arrow" style={{ width: 358, marginTop: '5px' }} />
      </div>
    </div>
    <div className="mobile-visible">
      <div className="mobile-info-bar">
        <div>
          <img src="./assets/images/ping-small.svg" alt="" />
          Ping <span>4</span>ms
        </div>
        <div>
          <img src="./assets/images/jitter-small.svg" alt="" />
          <FormattedMessage id="jitter" /> <span>3,2</span>ms
        </div>
        <div> 
          <img src="./assets/images/loss-icn-small.svg" alt="" />
          <FormattedMessage id="loss" /> <span>5%</span>
        </div>
      </div>
    </div>
    <div className="speed-bar">
      <div className="user" />
      <div className="server" />
      <div className="bar-area">
        <div className="bar-filled">
          <canvas id="c"></canvas>
        </div>
      </div>
    </div>
    <div className="speed-info">
      <div className="col">
        <div className="icon"></div>
        <div className="hero">Turkcell Superonline</div>
        <div className="label">212.252.115.21</div>                
      </div>
      <div className="col">
        <div className="icon"></div>
        <div className="hero">Radore DC</div>
        <div className="label">İstanbul</div>
      </div>                
    </div>
    </div>
  );
}

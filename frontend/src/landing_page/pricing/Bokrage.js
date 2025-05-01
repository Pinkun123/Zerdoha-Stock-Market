import React from "react";

function Bokrage() {
  return (
    <div className="container mb-5">
      <h3 className="text-center text-muted p-5">
        <a href="" style={{ textDecoration: "none" }}>
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </h3>
      <h2 className="mb-5">Charges explained</h2>

      <div className="row">
        <div className="col-lg-6 col-sm-12 mb-5">
          <h4 className="text-muted mb-4">
            Securities/Commodities transaction tax
          </h4>
          <p className="mb-3">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="mb-3">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h4 className="text-muted mb-4">Transaction/Turnover Charges</h4>
          <p className="mb-3">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="mb-3">
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="mb-3">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="mb-3">
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p className="mb-3">
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <h4 className="text-muted mb-4">Call & trade</h4>
          <p className="mb-3">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h4 className="text-muted mb-4">Stamp charges</h4>
          <p className="mb-3">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 mb-5">
          <h4 className="text-muted mb-4">GST</h4>
          <p className="mb-3">
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h4 className="text-muted mb-4">SEBI Charges</h4>
          <p className="mb-3">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets
          </p>
          <h4 className="text-muted mb-4">
            DP (Depository participant) charges
          </h4>
          <p className="mb-3">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="mb-3">
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p className="mb-3">
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h4 className="text-muted mb-4">DP Pledging charges</h4>
          <p className="mb-3">₹30 + GST per pledge request per ISIN.</p>

          <h4 className="text-muted mb-4">AMC (Account maintenance charges)</h4>
          <p className="mb-3">
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA, Click here
          </p>
          <p className="mb-3">
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC, Click here
          </p>
          <h4 className="text-muted mb-4">Corporate action order charges</h4>
          <p className="mb-3">
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
        </div>
        <h4 className="text-muted mb-4 ">Disclaimer</h4>
        <p className="mb-5">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Bokrage;

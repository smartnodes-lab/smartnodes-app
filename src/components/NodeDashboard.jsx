import styles from "../style"; 


const NodeDashboard = () => {
    return (
      <section className={`bg-slate-50 dark:bg-gray-900 xs:px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center pb-10`}>
        <div className="absolute md:top-40 right-4">
          <Button
            color="black"
            bgColor="lightGrey"
            text={contract ? "Connected" : "Connect Wallet"}
            borderRadius="10px"
            onClick={connectToContract}
          />  
        </div>
  
        <div className="max-w-[1280px] items-center w-full">
          <h1 className={`${styles.heading} text-left sm:px-10 md:px-0 xs:px-0 mt-20 md:mt-10 max-w-[1280px] mb-5`}>
            User Dashboard
          </h1>
  
          <div className="bg-white dark:bg-slate-800 dark:text-gray-200 rounded-xl max-w-[700px] p-3 xs:p-8 pt-7 m-3">

          </div>
        </div>
      </section>
    );
}

export default NodeDashboard;
<template>
    <div
        class="py-10 lg:py-24 flex flex-col justify-center items-center  bg-gradient-to-t from-[#003943] to-black from-40%">

        <p class="uppercase tracking-[23%] font-secondary font-[500] text-[14px] lg:text-[19.2px] text-white">
            Seamless. Secure. Profitable.
        </p>

        <h1
            class="mt-8 text-center font-[400] text-[44px] lg:text-[81px] text-white leading-tight lg:leading-[84px] font-primary max-w-5xl">
            Your Money. <br />Working Smarter.
        </h1>
        <p
            class=" mt-8 font-secondary font-[500] text-center lg:text-left text-[14px] lg:text-[19.2px] text-custom-white">
            Connect instantly, execute flawlessly — our algo syncs smoothly with every major broker.
        </p>

        <div class="flex flex-col lg:flex-row gap-8 mt-16 items-center">
            <!-- card-1 -->

            <!-- <div class="bg-gradient-to-r from-[#8E9EAB] h-fit to-[#EEF2F3] rounded-lg p-10 py-16 space-y-8 ">
                <div class="space-y-4">

                    <p class="font-bold text-[19.2px] text-[#222222] font-secondary">₹5L – ₹10 Lakh</p>
                    <p class="font-[500] text-[16px] text-[#222222] font-secondary">Invest more. Pay less. Grow faster.
                    </p>

                </div>
                <hr class="text-[#22222211] " />
                <div>
                    <p class="font-primary text-[#222222] text-[43px]">17%</p>
                    <p class="font-[500] text-[19.2px] text-[#222222] font-secondary">of your capital for 1 year
                    </p>
                </div>


            </div> -->
            <div class="bg-gradient-to-r h-fit from-[#8E9EAB] to-[#EEF2F3] rounded-lg p-10 py-16 space-y-8 ">
                <div class="space-y-4">

                    <p class="font-bold text-[19.2px] text-[#222222] font-secondary">₹1 – ₹5 Lakh</p>
                    <p class="font-[500] text-[16px] text-[#222222] font-secondary">Start small. Watch your money work.
                    </p>

                </div>
                <hr class="text-[#22222211] " />
                <div>
                    <p class="font-primary text-[#222222] text-[43px]">17%</p>
                    <p class="font-[500] text-[19.2px] text-[#222222] font-secondary">of your capital for 1 year
                    </p>
                </div>
            </div>


            <div class="bg-gradient-to-r w-full lg:w-fit from-[#8E9EAB] to-[#EEF2F3] rounded-lg p-10 py-16 space-y-8 ">
                <div class="space-y-4">

                    <p class="font-bold text-[19.2px] text-[#222222] font-secondary">₹5L – ₹10 Lakh</p>
                    <p class="font-[500] text-[16px] text-[#222222] font-secondary">Invest more. Pay less. Grow faster.
                    </p>

                </div>
                <hr class="text-[#22222211] " />
                <div>
                    <p class="font-primary text-[#222222] text-[43px]">15%</p>
                    <p class="font-[500] text-[19.2px] text-[#222222] font-secondary">of your capital for 1 year
                    </p>
                </div>
                <button @click="openWhatsApp"
                    class="bg-[#222222] text-white font-bold font-secondary text-[19.2px] w-56 py-4">
                    enquire now
                </button>
            </div>


            <div class="bg-gradient-to-r h-fit from-[#8E9EAB] to-[#EEF2F3] rounded-lg p-10 py-16 space-y-8 ">
                <div class="space-y-4">

                    <p class="font-bold text-[19.2px] text-[#222222] font-secondary">₹10 Lakh+</p>
                    <p class="font-[500] text-[16px] text-[#222222] font-secondary">Go big. Maximize returns.
                    </p>

                </div>
                <hr class="text-[#22222211] " />
                <div>
                    <p class="font-primary text-[#222222] text-[43px]">12%</p>
                    <p class="font-[500] text-[19.2px] text-[#222222] font-secondary">of your capital for 1 year
                    </p>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>

const openWhatsApp = () => {
    window.open(`https://wa.me/${8016374064}`, '_blank');
};
</script>

<style lang="scss" scoped></style>
import { CreditCard } from '../components/shared-assets/credit-card/credit-card'
import { PencilLine, Copy, Mail, UsersRound, Image, CircleDollarSign, Handbag, Info } from 'lucide-react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { PageContainer, Section, StatCard, Avatar } from '../components/common'

const Home = () => {
  const homeData = useSelector((state: RootState) => state.home);

  return (
    <PageContainer className="gap-4 max-w-6xl px-4 md:px-8 py-4 md:py-6 overflow-x-hidden">
      {/* Left Column - Commission and Links (First on Desktop) */}
      <div className="w-full md:flex-1 space-y-6 order-2 md:order-1">
        {/* My Commission Section - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block">
          <Section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl text-gray-800">
                My Commission
              </h2>
              <span className="text-sm md:text-base whitespace-nowrap text-gray-600">{homeData.commission.percentage}</span>
            </div>

            {/* Commission Card */}
            <div className="flex justify-center mb-4">
              <CreditCard
                balance={homeData.commission.balance}
                cardHolder={homeData.commission.cardHolder}
                width={350}
              />
            </div>

            {/* Payment Email Field */}
            <div className="flex items-center justify-between py-2 px-2 border border-gray-200 rounded-sm min-w-0">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-5 h-5 bg-blue-500 text-white flex items-center justify-center text-xs font-semibold rounded shrink-0">T</div>
                <span className="text-sm md:text-base text-gray-700 truncate">{homeData.commission.paymentEmail}</span>
              </div>
              <button className="text-purple-600 p-2 shrink-0"><PencilLine className="w-4 h-4" /></button>
            </div>
          </Section>
        </div>

        {/* My Links & Codes Section */}
        <div className="hidden md:block">
          <Section className="p-0 md:p-4">
            <h2 className="text-xl md:text-2xl text-gray-800 mb-5 md:pt-0">My Links & Codes</h2>
            <hr className="border-gray-200 my-6" />
            {/* Tracking Link */}
            <div className="mb-4">
              <label className="text-gray-600 mb-2 block px-6 text-sm md:text-base">Tracking Link:</label>
              <div className="flex items-center justify-between mx-6 p-2 border border-purple-200 border-dashed rounded-lg min-w-0">
                <span className="text-purple-600 underline font-mono text-sm md:text-base truncate pr-2 flex-1">{homeData.linksAndCodes.trackingLink}</span>
                <button className="text-gray-400 hover:text-gray-600 shrink-0"><Copy className="w-5 h-5 text-purple-600" /></button>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mb-4">
            <hr className="border-gray-200 my-2" />

              <label className="text-gray-600 mb-2 block px-6 text-sm md:text-base">Coupon Code:</label>
              <div className="flex items-center gap-2 mx-6 min-w-0">
                <div className="flex items-center gap-2 flex-1 md:w-fit min-w-0">
                  <span className="text-purple-600 font-mono text-sm md:text-base truncate border border-purple-200 border-dashed rounded-lg px-4 py-1 flex items-center gap-2">{homeData.linksAndCodes.couponCode}

                  <button className="text-purple-600 shrink-0">
                    <Copy className="w-5 h-5" />
                  </button>
                  </span>
                 
                </div>
                <button className="text-gray-600 shrink-0">
                  <PencilLine className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Right Column - Profile and Potential Earnings (Second on Desktop) */}
      <div className="w-full md:flex-1 space-y-6 order-1 md:order-2">
        {/* Profile Section */}
        <Section>
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-6">
            <Avatar src={homeData.profile.avatar} alt="avatar" size="lg" className="mb-4" />
            <h3 className="text-xl text-gray-800 mb-2">{homeData.profile.name}</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm"><Mail className="w-4 h-4" /></span>
              <span>{homeData.profile.email}</span>
              <button className=" hover:text-gray-600"><PencilLine className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              icon={<UsersRound className="w-6 h-6" />}
              value={homeData.stats.visitors.toString()}
              label="Visitors"
              variant="horizontal"
              bgColor="bg-red-50"
              iconColor="text-red-600"
            />

            <StatCard
              icon={<Image className="w-6 h-6" />}
              value={homeData.stats.posts.toString()}
              label="Posts"
              variant="horizontal"
              bgColor="bg-blue-50"
              iconColor="text-blue-600"
            />

            <StatCard
              icon={<CircleDollarSign className="w-6 h-6" />}
              value={homeData.stats.revenue}
              label="Revenue"
              variant="horizontal"
              bgColor="bg-orange-50"
              iconColor="text-orange-600"
            />

            <StatCard
              icon={<Handbag className="w-6 h-6" />}
              value={homeData.stats.orders.toString()}
              label="Orders"
              variant="horizontal"
              bgColor="bg-yellow-50"
              iconColor="text-yellow-600"
            />
          </div>
        </Section>

        {/* My Commission Section - Mobile only */}
        <div className="md:hidden">
          <Section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl text-gray-800">
                My Commission
              </h2>
              <span className="text-sm md:text-base whitespace-nowrap text-gray-600">{homeData.commission.percentage}</span>
            </div>

            {/* Commission Card */}
            <div className="flex justify-center mb-4">
              <CreditCard
                balance={homeData.commission.balance}
                cardHolder={homeData.commission.cardHolder}
                width={280}
              />
            </div>

            {/* Payment Email Field */}
            <div className="flex items-center justify-between py-2 px-2 border border-gray-200 rounded-sm min-w-0">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-5 h-5 bg-blue-500 text-white flex items-center justify-center text-xs font-semibold rounded shrink-0">T</div>
                <span className="text-sm md:text-base text-gray-700 truncate">{homeData.commission.paymentEmail}</span>
              </div>
              <button className="text-purple-600 p-2 shrink-0"><PencilLine className="w-4 h-4" /></button>
            </div>
          </Section>
        </div>

        {/* My Links & Codes Section - Mobile only */}
        <div className="md:hidden">
          <Section className="p-0 md:p-6">
            <h2 className="text-xl md:text-2xl text-gray-800 mb-6 md:pt-0">My Links & Codes</h2>
            <hr className="border-gray-200 my-4" />
            {/* Tracking Link */}
            <div className="mb-6">
              <label className="text-gray-600 mb-2 block px-6 text-sm md:text-base">Tracking Link:</label>
              <div className="flex items-center justify-between mx-6 p-2 border border-purple-200 border-dashed rounded-lg min-w-0">
                <span className="text-purple-600 underline font-mono text-sm md:text-base truncate pr-2 flex-1">{homeData.linksAndCodes.trackingLink}</span>
                <button className="text-gray-400 hover:text-gray-600 shrink-0"><Copy className="w-5 h-5 text-purple-600" /></button>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mb-6">
            <hr className="border-gray-200 my-4" />

              <label className="text-gray-600 mb-2 block px-6 text-sm md:text-base">Coupon Code:</label>
              <div className="flex items-center gap-2 mx-6 min-w-0">
                <div className="flex items-center gap-2 flex-1 md:w-fit min-w-0">
                  <span className="text-purple-600 font-mono text-sm md:text-base truncate border border-purple-200 border-dashed rounded-lg px-2 py-1">{homeData.linksAndCodes.couponCode}</span>
                  <button className="text-purple-600 shrink-0">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
                <button className="text-gray-600 shrink-0">
                  <PencilLine className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Section>
        </div>

        {/* Potential Earnings Section */}
        <Section className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <h2 className="text-xl text-gray-800">Potential Earnings</h2>
              <button><Info className="w-4 h-4 text-gray-500" /></button>
            </div>
            <p className="text-xl md:text-2xl text-gray-400">{homeData.potentialEarnings.amount}</p>
          </div>

          <p className="text-gray-500 text-sm mb-6">{homeData.potentialEarnings.description}</p>

          {/* Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>1 Post</span>
              <span>15 Posts</span>
            </div>
            <div className="relative">
              <div className="w-full h-1 bg-purple-100 rounded-full"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-6 h-6 bg-white rounded-full border-2 border-purple-600 shadow-md"></div>
            </div>
          </div>
        </Section>
      </div>
  </PageContainer>
  )
}

export default Home
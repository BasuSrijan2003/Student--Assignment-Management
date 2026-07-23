import { Link } from "react-router-dom";

const Home = () => {

  const token = localStorage.getItem("token")
  console.log(token);

  return (
    <div className="min-h-screen bg-[#0A0618] text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-violet-600/25 blur-[140px]"></div>
      <div className="absolute bottom-0 -right-40 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[130px]"></div>

      <div className="max-w-7xl mx-auto mt-20 px-6 pt-36 pb-20 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left */}
        <div className="lg:w-1/2">



          <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight">
            Organize.
            <br />
            Submit.
            <br />
            <span className="text-violet-400 [text-shadow:0_0_18px_rgba(139,92,246,.8)]">
              Succeed.
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            AssignHub helps students stay organized by managing assignments,
            tracking deadlines, and submitting work from one secure dashboard.
          </p>


          {token ? (<>
            <div className="flex gap-5 mt-10">
           <Link
                to="/dashboard"
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 font-medium shadow-lg shadow-violet-500/40 hover:scale-105 transition"
              >
                Go to dashboard
              </Link>

            </div>
          </>) : (<>

          <div className="flex gap-5 mt-10 ">

        

              <Link
                to="/register"
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 font-medium shadow-lg shadow-violet-500/40 hover:scale-105 transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="px-7 py-3 rounded-xl border border-violet-500/30 hover:bg-violet-500/10 transition"
              >
                Sign In
              </Link>
               </div>
          </>)}




          {/* Stats */}

          <div className="flex gap-10 mt-14">

            <div>
              <h2 className="text-3xl font-bold text-violet-400">500+</h2>
              <p className="text-gray-400 mt-2">Assignments</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-400">100+</h2>
              <p className="text-gray-400 mt-2">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-400">24/7</h2>
              <p className="text-gray-400 mt-2">Access</p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="lg:w-1/2 flex justify-center">

          <div className="w-full max-w-md rounded-3xl bg-[#161028]/70 backdrop-blur-xl border border-violet-500/20 p-8 shadow-2xl shadow-violet-500/20">

            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Upcoming Assignments</h2>
              <span className="text-green-400 text-sm">● Active</span>
            </div>

            <div className="mt-8 space-y-5">

              <div className="rounded-xl bg-[#23193F] p-5 border border-violet-500/10">
                <h3 className="font-semibold">Database Management</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Due: 18 July 2026
                </p>
              </div>

              <div className="rounded-xl bg-[#23193F] p-5 border border-violet-500/10">
                <h3 className="font-semibold">Computer Networks</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Due: 20 July 2026
                </p>
              </div>

              <div className="rounded-xl bg-[#23193F] p-5 border border-violet-500/10">
                <h3 className="font-semibold">Operating System</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Due: 23 July 2026
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;
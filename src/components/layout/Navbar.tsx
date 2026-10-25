
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  // Close menus when clicking outside or pressing Escape.
  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        setOpenDesktopDropdown(null);
        setSearchOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenDesktopDropdown(null);
        setOpenMobileDropdown(null);
        setSearchOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchQuery.trim();
    if (!query) return;

    navigate(`/products?search=${encodeURIComponent(query)}`);

    setSearchOpen(false);
    setMobileOpen(false);
    setOpenDesktopDropdown(null);
  }

  function closeNavigation() {
    setMobileOpen(false);
    setOpenMobileDropdown(null);
    setOpenDesktopDropdown(null);
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-8 z-50 border-b border-[#063D2B]/10 bg-white"
    >
      <div className="mx-auto flex h-[66px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          aria-label="Baraka Farm home"
          className="flex shrink-0 items-center"
          onClick={closeNavigation}
        >
          <img
            src="/ben-logo.png"
            alt="Baraka Farm"
            className="h-[44px] w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden h-full items-center gap-5 lg:flex xl:gap-7"
        >
          {navigation.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const dropdownIsOpen = openDesktopDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative flex h-full items-center"
                onMouseEnter={() => {
                  if (hasChildren) {
                    setOpenDesktopDropdown(item.label);
                  }
                }}
                onMouseLeave={() => {
                  if (hasChildren) {
                    setOpenDesktopDropdown(null);
                  }
                }}
              >
                <div className="relative flex h-full items-center">
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    onClick={() => {
                      if (hasChildren) {
                        setOpenDesktopDropdown(null);
                      }
                    }}
                    onFocus={() => {
                      if (hasChildren) {
                        setOpenDesktopDropdown(item.label);
                      }
                    }}
                    className={({ isActive }) =>
                      `relative flex h-full items-center gap-1 whitespace-nowrap text-[11px] font-bold transition-colors duration-200 ${
                        isActive || dropdownIsOpen
                          ? "text-[#063D2B]"
                          : "text-[#26352D] hover:text-[#98751A]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}

                        <span
                          className={`absolute bottom-0 left-0 h-[3px] w-full origin-center rounded-t-full bg-[#E9B949] transition-transform duration-200 ${
                            isActive || dropdownIsOpen
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>

                  {hasChildren && (
                    <button
                      type="button"
                      aria-label={`${dropdownIsOpen ? "Close" : "Open"} ${item.label} menu`}
                      aria-expanded={dropdownIsOpen}
                      onClick={() =>
                        setOpenDesktopDropdown((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                      className="ml-1 flex h-7 w-5 cursor-pointer items-center justify-center rounded text-[#174D35] transition-colors hover:bg-[#F7F5EC] focus:outline-none focus:ring-2 focus:ring-[#E9B949]"
                    >
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${
                          dropdownIsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Desktop dropdown panel */}
                {hasChildren && (
                  <div
                    className={`absolute left-0 top-full z-50 min-w-[244px] origin-top rounded-b-lg border border-[#063D2B]/10 bg-white py-2 shadow-xl transition-all duration-200 ${
                      dropdownIsOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    {item.children!.map((child, index) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        onClick={() => setOpenDesktopDropdown(null)}
                        className={({ isActive }) =>
                          `block px-[18px] py-3 text-[12px] transition-colors duration-150 ${
                            isActive
                              ? "bg-[#F7F5EC] font-bold text-[#063D2B]"
                              : "text-[#26352D] hover:bg-[#F7F5EC] hover:text-[#063D2B]"
                          } ${index === 0 ? "font-semibold" : ""}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Search and mobile menu buttons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen((open) => !open);
              setOpenDesktopDropdown(null);
            }}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#174D35] transition-colors hover:bg-[#F7F5EC] hover:text-[#98751A] focus:outline-none focus:ring-2 focus:ring-[#E9B949]"
          >
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((open) => !open);
              setOpenMobileDropdown(null);
            }}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#174D35] transition-colors hover:bg-[#F7F5EC] focus:outline-none focus:ring-2 focus:ring-[#E9B949] lg:hidden"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Search panel */}
      {searchOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-t border-gray-100 bg-white px-4 py-4 shadow-lg sm:px-6">
          <form
            onSubmit={handleSearch}
            className="mx-auto flex max-w-2xl items-center gap-3"
          >
            <Search size={19} className="shrink-0 text-[#174D35]" />

            <input
              autoFocus
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search poultry feeds, drinkers, equipment..."
              aria-label="Search Baraka Farm products"
              className="min-w-0 flex-1 border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-[#E9B949]"
            />

            <button
              type="submit"
              className="rounded-full bg-[#E9B949] px-5 py-3 text-xs font-extrabold text-[#063D2B] transition-colors hover:bg-[#d8a92f] focus:outline-none focus:ring-2 focus:ring-[#063D2B] focus:ring-offset-2"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-106px)] overflow-y-auto border-t border-gray-100 bg-white px-4 py-3 shadow-lg lg:hidden"
        >
          {navigation.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const submenuIsOpen = openMobileDropdown === item.label;

            return (
              <div
                key={item.label}
                className="border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    onClick={closeNavigation}
                    className={({ isActive }) =>
                      `flex min-w-0 flex-1 items-center py-3.5 text-sm font-semibold transition-colors ${
                        isActive
                          ? "text-[#063D2B]"
                          : "text-[#26352D] hover:text-[#98751A]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>

                  {hasChildren && (
                    <button
                      type="button"
                      aria-label={`${submenuIsOpen ? "Collapse" : "Expand"} ${item.label} submenu`}
                      aria-expanded={submenuIsOpen}
                      onClick={() =>
                        setOpenMobileDropdown((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                      className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-[#174D35] transition-colors hover:bg-[#F7F5EC] focus:outline-none focus:ring-2 focus:ring-[#E9B949]"
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-200 ${
                          submenuIsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Expandable mobile submenu */}
                {hasChildren && (
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                      submenuIsOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-3 ml-2 border-l-2 border-[#E9B949] pl-3">
                        {item.children!.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            onClick={closeNavigation}
                            className={({ isActive }) =>
                              `block rounded-r-md px-3 py-3 text-xs transition-colors ${
                                isActive
                                  ? "bg-[#F7F5EC] font-bold text-[#063D2B]"
                                  : "text-[#62675F] hover:bg-[#F7F5EC] hover:text-[#063D2B]"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}

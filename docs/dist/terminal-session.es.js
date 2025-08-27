var Da = Object.defineProperty;
var cn = (e) => {
  throw TypeError(e);
};
var Ma = (e, t, r) => t in e ? Da(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var fe = (e, t, r) => Ma(e, typeof t != "symbol" ? t + "" : t, r), $r = (e, t, r) => t.has(e) || cn("Cannot " + r);
var k = (e, t, r) => ($r(e, t, "read from private field"), r ? r.call(e) : t.get(e)), oe = (e, t, r) => t.has(e) ? cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _e = (e, t, r, n) => ($r(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), nt = (e, t, r) => ($r(e, t, "access private method"), r);
const Fa = "5";
var Tn;
typeof window < "u" && ((Tn = window.__svelte ?? (window.__svelte = {})).v ?? (Tn.v = /* @__PURE__ */ new Set())).add(Fa);
const La = 1, Ha = 2, Ua = 16, za = 1, ja = 4, Wa = 8, Va = 16, Ya = 2, kn = "[", Fr = "[!", Lr = "]", bt = {}, ie = Symbol(), En = !1;
var Hr = Array.isArray, Ka = Array.prototype.indexOf, Ur = Array.from, ar = Object.keys, kt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, Ga = Object.prototype, Ja = Array.prototype, Xa = Object.getPrototypeOf, dn = Object.isExtensible;
function xn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Za() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const we = 2, zr = 4, qn = 8, Pt = 16, ze = 32, Qe = 64, Sn = 128, Ee = 256, sr = 512, de = 1024, xe = 2048, et = 4096, Se = 8192, ct = 16384, jr = 32768, Wr = 65536, vn = 1 << 17, Qa = 1 << 18, Ct = 1 << 19, es = 1 << 20, Pr = 1 << 21, Vr = 1 << 22, ot = 1 << 23, Ft = Symbol("$state"), Pn = Symbol("legacy props"), Yr = new class extends Error {
  constructor() {
    super(...arguments);
    fe(this, "name", "StaleReactionError");
    fe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Cn = 3, Lt = 8;
function ts() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function rs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ns(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function as() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ss(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ls() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function is() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function os(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function us() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function fs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function dr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let V = !1;
function He(e) {
  V = e;
}
let L;
function De(e) {
  if (e === null)
    throw dr(), bt;
  return L = e;
}
function vr() {
  return De(
    /** @type {TemplateNode} */
    /* @__PURE__ */ dt(L)
  );
}
function Q(e) {
  if (V) {
    if (/* @__PURE__ */ dt(L) !== null)
      throw dr(), bt;
    L = e;
  }
}
function Cr() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === Lt) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Lr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === kn || r === Fr) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ dt(t)
    );
    t.remove(), t = n;
  }
}
function An(e) {
  if (!e || e.nodeType !== Lt)
    throw dr(), bt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Nn(e) {
  return e === this.v;
}
function ds(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Rn(e) {
  return !ds(e, this.v);
}
let vs = !1, Ce = null;
function lr(e) {
  Ce = e;
}
function Bn(e, t = !1, r) {
  Ce = {
    p: Ce,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function In(e) {
  var t = (
    /** @type {ComponentContext} */
    Ce
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ea(n);
  }
  return e !== void 0 && (t.x = e), Ce = t.p, e ?? /** @type {T} */
  {};
}
function On() {
  return !0;
}
const hs = /* @__PURE__ */ new WeakMap();
function _s(e) {
  var t = P;
  if (t === null)
    return S.f |= ot, e;
  if (t.f & jr)
    Kr(e, t);
  else {
    if (!(t.f & Sn))
      throw !t.parent && e instanceof Error && Dn(e), e;
    t.b.error(e);
  }
}
function Kr(e, t) {
  for (; t !== null; ) {
    if (t.f & Sn)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e instanceof Error && Dn(e), e;
}
function Dn(e) {
  const t = hs.get(e);
  t && (kt(e, "message", {
    value: t.message
  }), kt(e, "stack", {
    value: t.stack
  }));
}
let Ht = [], Ar = [];
function Mn() {
  var e = Ht;
  Ht = [], xn(e);
}
function ps() {
  var e = Ar;
  Ar = [], xn(e);
}
function bs(e) {
  Ht.length === 0 && queueMicrotask(Mn), Ht.push(e);
}
function gs() {
  Ht.length > 0 && Mn(), Ar.length > 0 && ps();
}
function ms() {
  for (var e = (
    /** @type {Effect} */
    P.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && ts(), e;
}
// @__NO_SIDE_EFFECTS__
function hr(e) {
  var t = we | xe, r = S !== null && S.f & we ? (
    /** @type {Derived} */
    S
  ) : null;
  return P === null || r !== null && r.f & Ee ? t |= Ee : P.f |= Ct, {
    ctx: Ce,
    deps: null,
    effects: null,
    equals: Nn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ie
    ),
    wv: 0,
    parent: r ?? P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ws(e, t) {
  let r = (
    /** @type {Effect | null} */
    P
  );
  r === null && rs();
  var n = (
    /** @type {Boundary} */
    r.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Ut(
    /** @type {V} */
    ie
  ), l = null, o = !S;
  return Ps(() => {
    try {
      var u = e();
    } catch (p) {
      u = Promise.reject(p);
    }
    var c = () => u;
    a = (l == null ? void 0 : l.then(c, c)) ?? Promise.resolve(u), l = a;
    var _ = (
      /** @type {Batch} */
      re
    ), b = n.pending;
    o && (n.update_pending_count(1), b || _.increment());
    const v = (p, h = void 0) => {
      l = null, b || _.activate(), h ? h !== Yr && (s.f |= ot, or(s, h)) : (s.f & ot && (s.f ^= ot), or(s, p)), o && (n.update_pending_count(-1), b || _.decrement()), Un();
    };
    if (a.then(v, (p) => v(null, p || "unknown")), _)
      return () => {
        queueMicrotask(() => _.neuter());
      };
  }), new Promise((u) => {
    function c(_) {
      function b() {
        _ === a ? u(s) : c(a);
      }
      _.then(b, b);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  const t = /* @__PURE__ */ hr(e);
  return ua(t), t;
}
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  const t = /* @__PURE__ */ hr(e);
  return t.equals = Rn, t;
}
function Ln(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Me(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ys(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & we))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Gr(e) {
  var t, r = P;
  Ze(ys(e));
  try {
    Ln(e), t = va(e);
  } finally {
    Ze(r);
  }
  return t;
}
function Hn(e) {
  var t = Gr(e);
  if (e.equals(t) || (e.v = t, e.wv = ca()), !vt)
    if (Ge !== null)
      Ge.set(e, e.v);
    else {
      var r = (Je || e.f & Ee) && e.deps !== null ? et : de;
      me(e, r);
    }
}
function $s(e, t, r) {
  const n = hr;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var a = re, s = (
    /** @type {Effect} */
    P
  ), l = Ts(), o = ms();
  Promise.all(t.map((u) => /* @__PURE__ */ ws(u))).then((u) => {
    a == null || a.activate(), l();
    try {
      r([...e.map(n), ...u]);
    } catch (c) {
      s.f & ct || Kr(c, s);
    }
    a == null || a.deactivate(), Un();
  }).catch((u) => {
    o.error(u);
  });
}
function Ts() {
  var e = P, t = S, r = Ce;
  return function() {
    Ze(e), Fe(t), lr(r);
  };
}
function Un() {
  Ze(null), Fe(null), lr(null);
}
const Mt = /* @__PURE__ */ new Set();
let re = null, Ge = null, hn = /* @__PURE__ */ new Set(), ir = [];
function zn() {
  const e = (
    /** @type {() => void} */
    ir.shift()
  );
  ir.length > 0 && queueMicrotask(zn), e();
}
let ft = [], _r = null, Nr = !1, tr = !1;
var wt, yt, Ye, jt, Wt, st, $t, lt, Ke, Tt, Vt, Yt, Pe, jn, rr, Rr;
const cr = class cr {
  constructor() {
    oe(this, Pe);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    fe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    oe(this, wt, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    oe(this, yt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    oe(this, Ye, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    oe(this, jt, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    oe(this, Wt, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    oe(this, st, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    oe(this, $t, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    oe(this, lt, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    oe(this, Ke, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    oe(this, Tt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    oe(this, Vt, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    oe(this, Yt, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    fe(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var s;
    ft = [];
    var r = null;
    if (Mt.size > 1) {
      r = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Map();
      for (const [l, o] of this.current)
        r.set(l, { v: l.v, wv: l.wv }), l.v = o;
      for (const l of Mt)
        if (l !== this)
          for (const [o, u] of k(l, wt))
            r.has(o) || (r.set(o, { v: o.v, wv: o.wv }), o.v = u);
    }
    for (const l of t)
      nt(this, Pe, jn).call(this, l);
    if (k(this, st).length === 0 && k(this, Ye) === 0) {
      nt(this, Pe, Rr).call(this);
      var n = k(this, lt), a = k(this, Ke);
      _e(this, lt, []), _e(this, Ke, []), _e(this, Tt, []), re = null, _n(n), _n(a), re === null ? re = this : Mt.delete(this), (s = k(this, jt)) == null || s.resolve();
    } else
      nt(this, Pe, rr).call(this, k(this, lt)), nt(this, Pe, rr).call(this, k(this, Ke)), nt(this, Pe, rr).call(this, k(this, Tt));
    if (r) {
      for (const [l, { v: o, wv: u }] of r)
        l.wv <= u && (l.v = o);
      Ge = null;
    }
    for (const l of k(this, st))
      mt(l);
    for (const l of k(this, $t))
      mt(l);
    _e(this, st, []), _e(this, $t, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    k(this, wt).has(t) || k(this, wt).set(t, r), this.current.set(t, t.v);
  }
  activate() {
    re = this;
  }
  deactivate() {
    re = null;
    for (const t of hn)
      if (hn.delete(t), t(), re !== null)
        break;
  }
  neuter() {
    _e(this, Wt, !0);
  }
  flush() {
    ft.length > 0 ? Wn() : nt(this, Pe, Rr).call(this), re === this && (k(this, Ye) === 0 && Mt.delete(this), this.deactivate());
  }
  increment() {
    _e(this, Ye, k(this, Ye) + 1);
  }
  decrement() {
    if (_e(this, Ye, k(this, Ye) - 1), k(this, Ye) === 0) {
      for (const t of k(this, Vt))
        me(t, xe), xt(t);
      for (const t of k(this, Yt))
        me(t, et), xt(t);
      _e(this, lt, []), _e(this, Ke, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    k(this, yt).add(t);
  }
  settled() {
    return (k(this, jt) ?? _e(this, jt, Za())).promise;
  }
  static ensure() {
    if (re === null) {
      const t = re = new cr();
      Mt.add(re), tr || cr.enqueue(() => {
        re === t && t.flush();
      });
    }
    return re;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    ir.length === 0 && queueMicrotask(zn), ir.unshift(t);
  }
};
wt = new WeakMap(), yt = new WeakMap(), Ye = new WeakMap(), jt = new WeakMap(), Wt = new WeakMap(), st = new WeakMap(), $t = new WeakMap(), lt = new WeakMap(), Ke = new WeakMap(), Tt = new WeakMap(), Vt = new WeakMap(), Yt = new WeakMap(), Pe = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
jn = function(t) {
  var _;
  t.f ^= de;
  for (var r = t.first; r !== null; ) {
    var n = r.f, a = (n & (ze | Qe)) !== 0, s = a && (n & de) !== 0, l = s || (n & Se) !== 0 || this.skipped_effects.has(r);
    if (!l && r.fn !== null) {
      if (a)
        r.f ^= de;
      else if (n & zr)
        k(this, Ke).push(r);
      else if (!(n & de))
        if (n & Vr) {
          var o = (_ = r.b) != null && _.pending ? k(this, $t) : k(this, st);
          o.push(r);
        } else pr(r) && (r.f & Pt && k(this, Tt).push(r), mt(r));
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    var c = r.parent;
    for (r = r.next; r === null && c !== null; )
      r = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
rr = function(t) {
  for (const r of t)
    (r.f & xe ? k(this, Vt) : k(this, Yt)).push(r), me(r, de);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Rr = function() {
  if (!k(this, Wt))
    for (const t of k(this, yt))
      t();
  k(this, yt).clear();
};
let Et = cr;
function W(e) {
  var t = tr;
  tr = !0;
  try {
    for (var r; ; ) {
      if (gs(), ft.length === 0 && (re == null || re.flush(), ft.length === 0))
        return _r = null, /** @type {T} */
        r;
      Wn();
    }
  } finally {
    tr = t;
  }
}
function Wn() {
  var e = gt;
  Nr = !0;
  try {
    var t = 0;
    for (bn(!0); ft.length > 0; ) {
      var r = Et.ensure();
      if (t++ > 1e3) {
        var n, a;
        ks();
      }
      r.process(ft), Xe.clear();
    }
  } finally {
    Nr = !1, bn(e), _r = null;
  }
}
function ks() {
  try {
    ls();
  } catch (e) {
    Kr(e, _r);
  }
}
let at = null;
function _n(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (ct | Se)) && pr(n) && (at = [], mt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? la(n) : n.fn = null), at.length > 0)) {
        Xe.clear();
        for (const a of at)
          mt(a);
        at = [];
      }
    }
    at = null;
  }
}
function xt(e) {
  for (var t = _r = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Nr && t === P && r & Pt)
      return;
    if (r & (Qe | ze)) {
      if (!(r & de)) return;
      t.f ^= de;
    }
  }
  ft.push(t);
}
const Xe = /* @__PURE__ */ new Map();
function Ut(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Nn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function D(e, t) {
  const r = Ut(e);
  return ua(r), r;
}
// @__NO_SIDE_EFFECTS__
function Vn(e, t = !1, r = !0) {
  const n = Ut(e);
  return t || (n.equals = Rn), n;
}
function w(e, t, r = !1) {
  S !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Oe || S.f & vn) && On() && S.f & (we | Pt | Vr | vn) && !(ve != null && ve.includes(e)) && cs();
  let n = r ? Ue(t) : t;
  return or(e, n);
}
function or(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    vt ? Xe.set(e, t) : Xe.set(e, r), e.v = t;
    var n = Et.ensure();
    n.capture(e, r), e.f & we && (e.f & xe && Gr(
      /** @type {Derived} */
      e
    ), me(e, e.f & Ee ? et : de)), e.wv = ca(), Yn(e, xe), P !== null && P.f & de && !(P.f & (ze | Qe)) && (Te === null ? Ns([e]) : Te.push(e));
  }
  return t;
}
function Zt(e, t = 1) {
  var r = i(e), n = t === 1 ? r++ : r--;
  return w(e, r), n;
}
function Tr(e) {
  w(e, e.v + 1);
}
function Yn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, a = 0; a < n; a++) {
      var s = r[a], l = s.f, o = (l & xe) === 0;
      o && me(s, t), l & we ? Yn(
        /** @type {Derived} */
        s,
        et
      ) : o && (l & Pt && at !== null && at.push(
        /** @type {Effect} */
        s
      ), xt(
        /** @type {Effect} */
        s
      ));
    }
}
function Ue(e) {
  if (typeof e != "object" || e === null || Ft in e)
    return e;
  const t = Xa(e);
  if (t !== Ga && t !== Ja)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Hr(e), a = /* @__PURE__ */ D(0), s = ut, l = (o) => {
    if (ut === s)
      return o();
    var u = S, c = ut;
    Fe(null), mn(s);
    var _ = o();
    return Fe(u), mn(c), _;
  };
  return n && r.set("length", /* @__PURE__ */ D(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && us();
        var _ = r.get(u);
        return _ === void 0 ? _ = l(() => {
          var b = /* @__PURE__ */ D(c.value);
          return r.set(u, b), b;
        }) : w(_, c.value, !0), !0;
      },
      deleteProperty(o, u) {
        var c = r.get(u);
        if (c === void 0) {
          if (u in o) {
            const _ = l(() => /* @__PURE__ */ D(ie));
            r.set(u, _), Tr(a);
          }
        } else
          w(c, ie), Tr(a);
        return !0;
      },
      get(o, u, c) {
        var p;
        if (u === Ft)
          return e;
        var _ = r.get(u), b = u in o;
        if (_ === void 0 && (!b || (p = it(o, u)) != null && p.writable) && (_ = l(() => {
          var h = Ue(b ? o[u] : ie), d = /* @__PURE__ */ D(h);
          return d;
        }), r.set(u, _)), _ !== void 0) {
          var v = i(_);
          return v === ie ? void 0 : v;
        }
        return Reflect.get(o, u, c);
      },
      getOwnPropertyDescriptor(o, u) {
        var c = Reflect.getOwnPropertyDescriptor(o, u);
        if (c && "value" in c) {
          var _ = r.get(u);
          _ && (c.value = i(_));
        } else if (c === void 0) {
          var b = r.get(u), v = b == null ? void 0 : b.v;
          if (b !== void 0 && v !== ie)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(o, u) {
        var v;
        if (u === Ft)
          return !0;
        var c = r.get(u), _ = c !== void 0 && c.v !== ie || Reflect.has(o, u);
        if (c !== void 0 || P !== null && (!_ || (v = it(o, u)) != null && v.writable)) {
          c === void 0 && (c = l(() => {
            var p = _ ? Ue(o[u]) : ie, h = /* @__PURE__ */ D(p);
            return h;
          }), r.set(u, c));
          var b = i(c);
          if (b === ie)
            return !1;
        }
        return _;
      },
      set(o, u, c, _) {
        var m;
        var b = r.get(u), v = u in o;
        if (n && u === "length")
          for (var p = c; p < /** @type {Source<number>} */
          b.v; p += 1) {
            var h = r.get(p + "");
            h !== void 0 ? w(h, ie) : p in o && (h = l(() => /* @__PURE__ */ D(ie)), r.set(p + "", h));
          }
        if (b === void 0)
          (!v || (m = it(o, u)) != null && m.writable) && (b = l(() => /* @__PURE__ */ D(void 0)), w(b, Ue(c)), r.set(u, b));
        else {
          v = b.v !== ie;
          var d = l(() => Ue(c));
          w(b, d);
        }
        var q = Reflect.getOwnPropertyDescriptor(o, u);
        if (q != null && q.set && q.set.call(_, c), !v) {
          if (n && typeof u == "string") {
            var B = (
              /** @type {Source<number>} */
              r.get("length")
            ), A = Number(u);
            Number.isInteger(A) && A >= B.v && w(B, A + 1);
          }
          Tr(a);
        }
        return !0;
      },
      ownKeys(o) {
        i(a);
        var u = Reflect.ownKeys(o).filter((b) => {
          var v = r.get(b);
          return v === void 0 || v.v !== ie;
        });
        for (var [c, _] of r)
          _.v !== ie && !(c in o) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        fs();
      }
    }
  );
}
var pn, Kn, Gn, Jn;
function Br() {
  if (pn === void 0) {
    pn = window, Kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Gn = it(t, "firstChild").get, Jn = it(t, "nextSibling").get, dn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), dn(r) && (r.__t = void 0);
  }
}
function qt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  return Gn.call(e);
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  return Jn.call(e);
}
function ee(e, t) {
  if (!V)
    return /* @__PURE__ */ ur(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ur(L)
  );
  if (r === null)
    r = L.appendChild(qt());
  else if (t && r.nodeType !== Cn) {
    var n = qt();
    return r == null || r.before(n), De(n), n;
  }
  return De(r), r;
}
function le(e, t = 1, r = !1) {
  let n = V ? L : e;
  for (var a; t--; )
    a = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ dt(n);
  if (!V)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== Cn) {
    var s = qt();
    return n === null ? a == null || a.after(s) : n.before(s), De(s), s;
  }
  return De(n), /** @type {TemplateNode} */
  n;
}
function Xn(e) {
  e.textContent = "";
}
function Zn() {
  return !1;
}
function Qn(e) {
  var t = S, r = P;
  Fe(null), Ze(null);
  try {
    return e();
  } finally {
    Fe(t), Ze(r);
  }
}
function Es(e) {
  P === null && S === null && ss(), S !== null && S.f & Ee && P === null && as(), vt && ns();
}
function xs(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function je(e, t, r, n = !0) {
  var a = P;
  a !== null && a.f & Se && (e |= Se);
  var s = {
    ctx: Ce,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | xe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      mt(s), s.f |= jr;
    } catch (u) {
      throw Me(s), u;
    }
  else t !== null && xt(s);
  if (n) {
    var l = s;
    if (r && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && // either `null`, or a singular child
    !(l.f & Ct) && (l = l.first), l !== null && (l.parent = a, a !== null && xs(l, a), S !== null && S.f & we && !(e & Qe))) {
      var o = (
        /** @type {Derived} */
        S
      );
      (o.effects ?? (o.effects = [])).push(l);
    }
  }
  return s;
}
function kr(e) {
  Es();
  var t = (
    /** @type {Effect} */
    P.f
  ), r = !S && (t & ze) !== 0 && (t & jr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ce
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ea(e);
}
function ea(e) {
  return je(zr | es, e, !1);
}
function qs(e) {
  Et.ensure();
  const t = je(Qe | Ct, e, !0);
  return () => {
    Me(t);
  };
}
function Ss(e) {
  Et.ensure();
  const t = je(Qe | Ct, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Jr(t, () => {
      Me(t), n(void 0);
    }) : (Me(t), n(void 0));
  });
}
function ta(e) {
  return je(zr, e, !1);
}
function Ps(e) {
  return je(Vr | Ct, e, !0);
}
function ra(e, t = 0) {
  return je(qn | t, e, !0);
}
function qe(e, t = [], r = []) {
  $s(t, r, (n) => {
    je(qn, () => e(...n.map(i)), !0);
  });
}
function na(e, t = 0) {
  var r = je(Pt | t, e, !0);
  return r;
}
function St(e, t = !0) {
  return je(ze | Ct, e, !0, t);
}
function aa(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = vt, n = S;
    gn(!0), Fe(null);
    try {
      t.call(null);
    } finally {
      gn(r), Fe(n);
    }
  }
}
function sa(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Qn(() => {
      a.abort(Yr);
    });
    var n = r.next;
    r.f & Qe ? r.parent = null : Me(r, t), r = n;
  }
}
function Cs(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & ze || Me(t), t = r;
  }
}
function Me(e, t = !0) {
  var r = !1;
  (t || e.f & Qa) && e.nodes_start !== null && e.nodes_end !== null && (As(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), sa(e, t && !r), fr(e, 0), me(e, ct);
  var n = e.transitions;
  if (n !== null)
    for (const s of n)
      s.stop();
  aa(e);
  var a = e.parent;
  a !== null && a.first !== null && la(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function As(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ dt(e)
    );
    e.remove(), e = r;
  }
}
function la(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Jr(e, t) {
  var r = [];
  Xr(e, r, !0), ia(r, () => {
    Me(e), t && t();
  });
}
function ia(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var a of e)
      a.out(n);
  } else
    t();
}
function Xr(e, t, r) {
  if (!(e.f & Se)) {
    if (e.f ^= Se, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || r) && t.push(l);
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & Wr) !== 0 || (n.f & ze) !== 0;
      Xr(n, t, s ? r : !1), n = a;
    }
  }
}
function Zr(e) {
  oa(e, !0);
}
function oa(e, t) {
  if (e.f & Se) {
    e.f ^= Se, e.f & de || (me(e, xe), xt(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & Wr) !== 0 || (r.f & ze) !== 0;
      oa(r, a ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
let gt = !1;
function bn(e) {
  gt = e;
}
let vt = !1;
function gn(e) {
  vt = e;
}
let S = null, Oe = !1;
function Fe(e) {
  S = e;
}
let P = null;
function Ze(e) {
  P = e;
}
let ve = null;
function ua(e) {
  S !== null && (ve === null ? ve = [e] : ve.push(e));
}
let ce = null, ge = 0, Te = null;
function Ns(e) {
  Te = e;
}
let fa = 1, zt = 0, ut = zt;
function mn(e) {
  ut = e;
}
let Je = !1;
function ca() {
  return ++fa;
}
function pr(e) {
  var b;
  var t = e.f;
  if (t & xe)
    return !0;
  if (t & et) {
    var r = e.deps, n = (t & Ee) !== 0;
    if (r !== null) {
      var a, s, l = (t & sr) !== 0, o = n && P !== null && !Je, u = r.length;
      if ((l || o) && (P === null || !(P.f & ct))) {
        var c = (
          /** @type {Derived} */
          e
        ), _ = c.parent;
        for (a = 0; a < u; a++)
          s = r[a], (l || !((b = s == null ? void 0 : s.reactions) != null && b.includes(c))) && (s.reactions ?? (s.reactions = [])).push(c);
        l && (c.f ^= sr), o && _ !== null && !(_.f & Ee) && (c.f ^= Ee);
      }
      for (a = 0; a < u; a++)
        if (s = r[a], pr(
          /** @type {Derived} */
          s
        ) && Hn(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!n || P !== null && !Je) && me(e, de);
  }
  return !1;
}
function da(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ve != null && ve.includes(e)))
    for (var a = 0; a < n.length; a++) {
      var s = n[a];
      s.f & we ? da(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? me(s, xe) : s.f & de && me(s, et), xt(
        /** @type {Effect} */
        s
      ));
    }
}
function va(e) {
  var d;
  var t = ce, r = ge, n = Te, a = S, s = Je, l = ve, o = Ce, u = Oe, c = ut, _ = e.f;
  ce = /** @type {null | Value[]} */
  null, ge = 0, Te = null, Je = (_ & Ee) !== 0 && (Oe || !gt || S === null), S = _ & (ze | Qe) ? null : e, ve = null, lr(e.ctx), Oe = !1, ut = ++zt, e.ac !== null && (Qn(() => {
    e.ac.abort(Yr);
  }), e.ac = null);
  try {
    e.f |= Pr;
    var b = (
      /** @type {Function} */
      e.fn
    ), v = b(), p = e.deps;
    if (ce !== null) {
      var h;
      if (fr(e, ge), p !== null && ge > 0)
        for (p.length = ge + ce.length, h = 0; h < ce.length; h++)
          p[ge + h] = ce[h];
      else
        e.deps = p = ce;
      if (!Je || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      _ & we && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = ge; h < p.length; h++)
          ((d = p[h]).reactions ?? (d.reactions = [])).push(e);
    } else p !== null && ge < p.length && (fr(e, ge), p.length = ge);
    if (On() && Te !== null && !Oe && p !== null && !(e.f & (we | et | xe)))
      for (h = 0; h < /** @type {Source[]} */
      Te.length; h++)
        da(
          Te[h],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (zt++, Te !== null && (n === null ? n = Te : n.push(.../** @type {Source[]} */
    Te))), e.f & ot && (e.f ^= ot), v;
  } catch (q) {
    return _s(q);
  } finally {
    e.f ^= Pr, ce = t, ge = r, Te = n, S = a, Je = s, ve = l, lr(o), Oe = u, ut = c;
  }
}
function Rs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ka.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  r === null && t.f & we && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ce === null || !ce.includes(t)) && (me(t, et), t.f & (Ee | sr) || (t.f ^= sr), Ln(
    /** @type {Derived} **/
    t
  ), fr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function fr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Rs(e, r[n]);
}
function mt(e) {
  var t = e.f;
  if (!(t & ct)) {
    me(e, de);
    var r = P, n = gt;
    P = e, gt = !0;
    try {
      t & Pt ? Cs(e) : sa(e), aa(e);
      var a = va(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = fa;
      var s;
      En && vs && e.f & xe && e.deps;
    } finally {
      gt = n, P = r;
    }
  }
}
async function Bs() {
  await Promise.resolve(), W();
}
function i(e) {
  var t = e.f, r = (t & we) !== 0;
  if (S !== null && !Oe) {
    var n = P !== null && (P.f & ct) !== 0;
    if (!n && !(ve != null && ve.includes(e))) {
      var a = S.deps;
      if (S.f & Pr)
        e.rv < zt && (e.rv = zt, ce === null && a !== null && a[ge] === e ? ge++ : ce === null ? ce = [e] : (!Je || !ce.includes(e)) && ce.push(e));
      else {
        (S.deps ?? (S.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [S] : s.includes(S) || s.push(S);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), o = l.parent;
    o !== null && !(o.f & Ee) && (l.f ^= Ee);
  }
  if (vt) {
    if (Xe.has(e))
      return Xe.get(e);
    if (r) {
      l = /** @type {Derived} */
      e;
      var u = l.v;
      return (!(l.f & de) && l.reactions !== null || ha(l)) && (u = Gr(l)), Xe.set(l, u), u;
    }
  } else if (r) {
    if (l = /** @type {Derived} */
    e, Ge != null && Ge.has(l))
      return Ge.get(l);
    pr(l) && Hn(l);
  }
  if (e.f & ot)
    throw e.v;
  return e.v;
}
function ha(e) {
  if (e.v === ie) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Xe.has(t) || t.f & we && ha(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function _a(e) {
  var t = Oe;
  try {
    return Oe = !0, e();
  } finally {
    Oe = t;
  }
}
const Is = -7169;
function me(e, t) {
  e.f = e.f & Is | t;
}
const pa = /* @__PURE__ */ new Set(), Ir = /* @__PURE__ */ new Set();
function Os(e) {
  for (var t = 0; t < e.length; t++)
    pa.add(e[t]);
  for (var r of Ir)
    r(e);
}
let wn = null;
function Qt(e) {
  var A;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = ((A = e.composedPath) == null ? void 0 : A.call(e)) || [], s = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  wn = e;
  var l = 0, o = wn === e && e.__root;
  if (o) {
    var u = a.indexOf(o);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = a.indexOf(t);
    if (c === -1)
      return;
    u <= c && (l = u);
  }
  if (s = /** @type {Element} */
  a[l] || e.target, s !== t) {
    kt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var _ = S, b = P;
    Fe(null), Ze(null);
    try {
      for (var v, p = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var d = s["__" + n];
          if (d != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s))
            if (Hr(d)) {
              var [q, ...B] = d;
              q.apply(s, [e, ...B]);
            } else
              d.call(s, e);
        } catch (m) {
          v ? p.push(m) : v = m;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        s = h;
      }
      if (v) {
        for (let m of p)
          queueMicrotask(() => {
            throw m;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Fe(_), Ze(b);
    }
  }
}
function Ds(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Or(e, t) {
  var r = (
    /** @type {Effect} */
    P
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  var r = (t & Ya) !== 0, n, a = !e.startsWith("<!>");
  return () => {
    if (V)
      return Or(L, null), L;
    n === void 0 && (n = Ds(a ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ ur(n));
    var s = (
      /** @type {TemplateNode} */
      r || Kn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Or(s, s), s;
  };
}
function M(e, t) {
  if (V) {
    P.nodes_end = L, vr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ms = ["touchstart", "touchmove"];
function Fs(e) {
  return Ms.includes(e);
}
function Be(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function ba(e, t) {
  return ga(e, t);
}
function Ls(e, t) {
  Br(), t.intro = t.intro ?? !1;
  const r = t.target, n = V, a = L;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ur(r)
    ); s && (s.nodeType !== Lt || /** @type {Comment} */
    s.data !== kn); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ dt(s);
    if (!s)
      throw bt;
    He(!0), De(
      /** @type {Comment} */
      s
    ), vr();
    const l = ga(e, { ...t, anchor: s });
    if (L === null || L.nodeType !== Lt || /** @type {Comment} */
    L.data !== Lr)
      throw dr(), bt;
    return He(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== bt && console.warn("Failed to hydrate: ", l), t.recover === !1 && is(), Br(), Xn(r), He(!1), ba(e, t);
  } finally {
    He(n), De(a);
  }
}
const pt = /* @__PURE__ */ new Map();
function ga(e, { target: t, anchor: r, props: n = {}, events: a, context: s, intro: l = !0 }) {
  Br();
  var o = /* @__PURE__ */ new Set(), u = (b) => {
    for (var v = 0; v < b.length; v++) {
      var p = b[v];
      if (!o.has(p)) {
        o.add(p);
        var h = Fs(p);
        t.addEventListener(p, Qt, { passive: h });
        var d = pt.get(p);
        d === void 0 ? (document.addEventListener(p, Qt, { passive: h }), pt.set(p, 1)) : pt.set(p, d + 1);
      }
    }
  };
  u(Ur(pa)), Ir.add(u);
  var c = void 0, _ = Ss(() => {
    var b = r ?? t.appendChild(qt());
    return St(() => {
      if (s) {
        Bn({});
        var v = (
          /** @type {ComponentContext} */
          Ce
        );
        v.c = s;
      }
      a && (n.$$events = a), V && Or(
        /** @type {TemplateNode} */
        b,
        null
      ), c = e(b, n) || {}, V && (P.nodes_end = L), s && In();
    }), () => {
      var h;
      for (var v of o) {
        t.removeEventListener(v, Qt);
        var p = (
          /** @type {number} */
          pt.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, Qt), pt.delete(v)) : pt.set(v, p);
      }
      Ir.delete(u), b !== r && ((h = b.parentNode) == null || h.removeChild(b));
    };
  });
  return Dr.set(c, _), c;
}
let Dr = /* @__PURE__ */ new WeakMap();
function Hs(e, t) {
  const r = Dr.get(e);
  return r ? (Dr.delete(e), r(t)) : Promise.resolve();
}
function ae(e, t, r = !1) {
  V && vr();
  var n = e, a = null, s = null, l = ie, o = r ? Wr : 0, u = !1;
  const c = (p, h = !0) => {
    u = !0, v(h, p);
  };
  var _ = null;
  function b() {
    _ !== null && (_.lastChild.remove(), n.before(_), _ = null);
    var p = l ? a : s, h = l ? s : a;
    p && Zr(p), h && Jr(h, () => {
      l ? s = null : a = null;
    });
  }
  const v = (p, h) => {
    if (l === (l = p)) return;
    let d = !1;
    if (V) {
      const y = An(n) === Fr;
      !!l === y && (n = Cr(), De(n), He(!1), d = !0);
    }
    var q = Zn(), B = n;
    if (q && (_ = document.createDocumentFragment(), _.append(B = qt())), l ? a ?? (a = h && St(() => h(B))) : s ?? (s = h && St(() => h(B))), q) {
      var A = (
        /** @type {Batch} */
        re
      ), m = l ? a : s, C = l ? s : a;
      m && A.skipped_effects.delete(m), C && A.skipped_effects.add(C), A.add_callback(b);
    } else
      b();
    d && He(!0);
  };
  na(() => {
    u = !1, t(c), u || v(null, null);
  }, o), V && (n = L);
}
function Er(e, t) {
  return t;
}
function Us(e, t, r) {
  for (var n = e.items, a = [], s = t.length, l = 0; l < s; l++)
    Xr(t[l].e, a, !0);
  var o = s > 0 && a.length === 0 && r !== null;
  if (o) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Xn(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), Ie(e, t[0].prev, t[s - 1].next);
  }
  ia(a, () => {
    for (var c = 0; c < s; c++) {
      var _ = t[c];
      o || (n.delete(_.k), Ie(e, _.prev, _.next)), Me(_.e, !o);
    }
  });
}
function xr(e, t, r, n, a, s = null) {
  var l = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  V && vr();
  var u = null, c = !1, _ = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ Fn(() => {
    var d = r();
    return Hr(d) ? d : d == null ? [] : Ur(d);
  }), v, p;
  function h() {
    zs(
      p,
      v,
      o,
      _,
      l,
      a,
      t,
      n,
      r
    ), s !== null && (v.length === 0 ? u ? Zr(u) : u = St(() => s(l)) : u !== null && Jr(u, () => {
      u = null;
    }));
  }
  na(() => {
    p ?? (p = /** @type {Effect} */
    P), v = /** @type {V[]} */
    i(b);
    var d = v.length;
    if (c && d === 0)
      return;
    c = d === 0;
    let q = !1;
    if (V) {
      var B = An(l) === Fr;
      B !== (d === 0) && (l = Cr(), De(l), He(!1), q = !0);
    }
    if (V) {
      for (var A = null, m, C = 0; C < d; C++) {
        if (L.nodeType === Lt && /** @type {Comment} */
        L.data === Lr) {
          l = /** @type {Comment} */
          L, q = !0, He(!1);
          break;
        }
        var y = v[C], ne = n(y, C);
        m = Mr(
          L,
          o,
          A,
          null,
          y,
          ne,
          C,
          a,
          t,
          r
        ), o.items.set(ne, m), A = m;
      }
      d > 0 && De(Cr());
    }
    if (V)
      d === 0 && s && (u = St(() => s(l)));
    else if (Zn()) {
      var he = /* @__PURE__ */ new Set(), pe = (
        /** @type {Batch} */
        re
      );
      for (C = 0; C < d; C += 1) {
        y = v[C], ne = n(y, C);
        var F = o.items.get(ne) ?? _.get(ne);
        F ? ma(F, y, C) : (m = Mr(
          null,
          o,
          null,
          null,
          y,
          ne,
          C,
          a,
          t,
          r,
          !0
        ), _.set(ne, m)), he.add(ne);
      }
      for (const [N, tt] of o.items)
        he.has(N) || pe.skipped_effects.add(tt.e);
      pe.add_callback(h);
    } else
      h();
    q && He(!0), i(b);
  }), V && (l = L);
}
function zs(e, t, r, n, a, s, l, o, u) {
  var c = t.length, _ = r.items, b = r.first, v = b, p, h = null, d = [], q = [], B, A, m, C;
  for (C = 0; C < c; C += 1) {
    if (B = t[C], A = o(B, C), m = _.get(A), m === void 0) {
      var y = n.get(A);
      if (y !== void 0) {
        n.delete(A), _.set(A, y);
        var ne = h ? h.next : v;
        Ie(r, h, y), Ie(r, y, ne), qr(y, ne, a), h = y;
      } else {
        var he = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : a;
        h = Mr(
          he,
          r,
          h,
          h === null ? r.first : h.next,
          B,
          A,
          C,
          s,
          l,
          u
        );
      }
      _.set(A, h), d = [], q = [], v = h.next;
      continue;
    }
    if (ma(m, B, C), m.e.f & Se && Zr(m.e), m !== v) {
      if (p !== void 0 && p.has(m)) {
        if (d.length < q.length) {
          var pe = q[0], F;
          h = pe.prev;
          var N = d[0], tt = d[d.length - 1];
          for (F = 0; F < d.length; F += 1)
            qr(d[F], pe, a);
          for (F = 0; F < q.length; F += 1)
            p.delete(q[F]);
          Ie(r, N.prev, tt.next), Ie(r, h, N), Ie(r, tt, pe), v = pe, h = tt, C -= 1, d = [], q = [];
        } else
          p.delete(m), qr(m, v, a), Ie(r, m.prev, m.next), Ie(r, m, h === null ? r.first : h.next), Ie(r, h, m), h = m;
        continue;
      }
      for (d = [], q = []; v !== null && v.k !== A; )
        v.e.f & Se || (p ?? (p = /* @__PURE__ */ new Set())).add(v), q.push(v), v = v.next;
      if (v === null)
        continue;
      m = v;
    }
    d.push(m), h = m, v = m.next;
  }
  if (v !== null || p !== void 0) {
    for (var rt = p === void 0 ? [] : Ur(p); v !== null; )
      v.e.f & Se || rt.push(v), v = v.next;
    var At = rt.length;
    if (At > 0) {
      var Nt = null;
      Us(r, rt, Nt);
    }
  }
  e.first = r.first && r.first.e, e.last = h && h.e;
  for (var Rt of n.values())
    Me(Rt.e);
  n.clear();
}
function ma(e, t, r, n) {
  or(e.v, t), e.i = r;
}
function Mr(e, t, r, n, a, s, l, o, u, c, _) {
  var b = (u & La) !== 0, v = (u & Ua) === 0, p = b ? v ? /* @__PURE__ */ Vn(a, !1, !1) : Ut(a) : a, h = u & Ha ? Ut(l) : l, d = {
    i: h,
    v: p,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var q = document.createDocumentFragment();
      q.append(e = qt());
    }
    return d.e = St(() => o(
      /** @type {Node} */
      e,
      p,
      h,
      c
    ), V), d.e.prev = r && r.e, d.e.next = n && n.e, r === null ? _ || (t.first = d) : (r.next = d, r.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function qr(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, a = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, s = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); s !== null && s !== n; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ dt(s)
    );
    a.before(s), s = l;
  }
}
function Ie(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function js(e, t) {
  ta(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const a = document.createElement("style");
      a.id = t.hash, a.textContent = t.code, n.appendChild(a);
    }
  });
}
function Ws(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n = n ? n + " " + t : t, n === "" ? null : n;
}
function Sr(e, t, r, n, a, s) {
  var l = e.__className;
  if (V || l !== r || l === void 0) {
    var o = Ws(r, n);
    (!V || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  }
  return s;
}
function yn(e, t) {
  return e === t || (e == null ? void 0 : e[Ft]) === t;
}
function $n(e = {}, t, r, n) {
  return ta(() => {
    var a, s;
    return ra(() => {
      a = s, s = [], _a(() => {
        e !== r(...s) && (t(e, ...s), a && yn(r(...a), e) && t(null, ...a));
      });
    }), () => {
      bs(() => {
        s && yn(r(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let er = !1;
function Vs(e) {
  var t = er;
  try {
    return er = !1, [e(), er];
  } finally {
    er = t;
  }
}
function te(e, t, r, n) {
  var A;
  var a = (r & Wa) !== 0, s = (r & Va) !== 0, l = (
    /** @type {V} */
    n
  ), o = !0, u = () => (o && (o = !1, l = s ? _a(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l), c;
  if (a) {
    var _ = Ft in e || Pn in e;
    c = ((A = it(e, t)) == null ? void 0 : A.set) ?? (_ && t in e ? (m) => e[t] = m : void 0);
  }
  var b, v = !1;
  a ? [b, v] = Vs(() => (
    /** @type {V} */
    e[t]
  )) : b = /** @type {V} */
  e[t], b === void 0 && n !== void 0 && (b = u(), c && (os(), c(b)));
  var p;
  if (p = () => {
    var m = (
      /** @type {V} */
      e[t]
    );
    return m === void 0 ? u() : (o = !0, m);
  }, !(r & ja))
    return p;
  if (c) {
    var h = e.$$legacy;
    return (
      /** @type {() => V} */
      function(m, C) {
        return arguments.length > 0 ? ((!C || h || v) && c(C ? p() : m), m) : p();
      }
    );
  }
  var d = !1, q = (r & za ? hr : Fn)(() => (d = !1, p()));
  a && i(q);
  var B = (
    /** @type {Effect} */
    P
  );
  return (
    /** @type {() => V} */
    function(m, C) {
      if (arguments.length > 0) {
        const y = C ? i(q) : a ? Ue(m) : m;
        return w(q, y), d = !0, l !== void 0 && (l = y), m;
      }
      return vt && d || B.f & ct ? q.v : i(q);
    }
  );
}
function Ys(e) {
  return new Ks(e);
}
var Le, ke;
class Ks {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    oe(this, Le);
    /** @type {Record<string, any>} */
    oe(this, ke);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (l, o) => {
      var u = /* @__PURE__ */ Vn(o, !1, !1);
      return r.set(l, u), u;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, o) {
          return i(r.get(o) ?? n(o, Reflect.get(l, o)));
        },
        has(l, o) {
          return o === Pn ? !0 : (i(r.get(o) ?? n(o, Reflect.get(l, o))), Reflect.has(l, o));
        },
        set(l, o, u) {
          return w(r.get(o) ?? n(o, u), u), Reflect.set(l, o, u);
        }
      }
    );
    _e(this, ke, (t.hydrate ? Ls : ba)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && W(), _e(this, Le, a.$$events);
    for (const l of Object.keys(k(this, ke)))
      l === "$set" || l === "$destroy" || l === "$on" || kt(this, l, {
        get() {
          return k(this, ke)[l];
        },
        /** @param {any} value */
        set(o) {
          k(this, ke)[l] = o;
        },
        enumerable: !0
      });
    k(this, ke).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(a, l);
    }, k(this, ke).$destroy = () => {
      Hs(k(this, ke));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    k(this, ke).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    k(this, Le)[t] = k(this, Le)[t] || [];
    const n = (...a) => r.call(this, ...a);
    return k(this, Le)[t].push(n), () => {
      k(this, Le)[t] = k(this, Le)[t].filter(
        /** @param {any} fn */
        (a) => a !== n
      );
    };
  }
  $destroy() {
    k(this, ke).$destroy();
  }
}
Le = new WeakMap(), ke = new WeakMap();
let wa;
typeof HTMLElement == "function" && (wa = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    fe(this, "$$ctor");
    /** Slots */
    fe(this, "$$s");
    /** @type {any} The Svelte component instance */
    fe(this, "$$c");
    /** Whether or not the custom element is connected */
    fe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    fe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    fe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    fe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    fe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    fe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    fe(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const a = this.$$c.$on(t, r);
      this.$$l_u.set(r, a);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const a = this.$$l_u.get(r);
      a && (a(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return (s) => {
          const l = document.createElement("slot");
          a !== "default" && (l.name = a), M(s, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Gs(this);
      for (const a of this.$$s)
        a in n && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const s = this.$$g_p(a.name);
        s in this.$$d || (this.$$d[s] = nr(s, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = Ys({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = qs(() => {
        ra(() => {
          var a;
          this.$$r = !0;
          for (const s of ar(this.$$c)) {
            if (!((a = this.$$p_d[s]) != null && a.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const l = nr(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, l);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const s of this.$$l[a]) {
          const l = this.$$c.$on(a, s);
          this.$$l_u.set(s, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = nr(t, n, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return ar(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function nr(e, t, r, n) {
  var s;
  const a = (s = r[e]) == null ? void 0 : s.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (a) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (a) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Gs(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Js(e, t, r, n, a, s) {
  let l = class extends wa {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ar(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return ar(t).forEach((o) => {
    kt(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var b;
        u = nr(o, u, t), this.$$d[o] = u;
        var c = this.$$c;
        if (c) {
          var _ = (b = it(c, o)) == null ? void 0 : b.get;
          _ ? c[o] = u : c.$set({ [o]: u });
        }
      }
    });
  }), n.forEach((o) => {
    kt(l.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
const Xs = {
  background: "#0d1117",
  foreground: "#c9d1d9",
  border: "#30363d",
  headerBg: "#161b22",
  headerFg: "#8b949e",
  prompt: "#58a6ff",
  command: "#79c0ff",
  output: "#c9d1d9",
  error: "#ff7b72",
  warning: "#ffa657",
  info: "#58a6ff",
  success: "#56d364",
  selection: "#264f78",
  cursor: "#58a6ff"
}, Zs = {
  background: "#ffffff",
  foreground: "#24292f",
  border: "#d0d7de",
  headerBg: "#f6f8fa",
  headerFg: "#57606a",
  prompt: "#0969da",
  command: "#0550ae",
  output: "#24292f",
  error: "#cf222e",
  warning: "#9a6700",
  info: "#0969da",
  success: "#1a7f37",
  selection: "#b6e3ff",
  cursor: "#0969da"
};
function Qs(e, t) {
  const r = t.style;
  r.setProperty("--terminal-bg", e.background), r.setProperty("--terminal-fg", e.foreground), r.setProperty("--terminal-border", e.border), r.setProperty("--terminal-header-bg", e.headerBg), r.setProperty("--terminal-header-fg", e.headerFg), r.setProperty("--terminal-prompt", e.prompt), r.setProperty("--terminal-command", e.command), r.setProperty("--terminal-output", e.output), r.setProperty("--terminal-error", e.error), r.setProperty("--terminal-warning", e.warning), r.setProperty("--terminal-info", e.info), r.setProperty("--terminal-success", e.success), r.setProperty("--terminal-selection", e.selection), r.setProperty("--terminal-cursor", e.cursor);
}
function el(e, t) {
  return { ...e, ...t };
}
var tl = /* @__PURE__ */ H('<div class="terminal-buttons svelte-2qd9r7"><span class="terminal-button close svelte-2qd9r7"></span> <span class="terminal-button minimize svelte-2qd9r7"></span> <span class="terminal-button maximize svelte-2qd9r7"></span></div>'), rl = /* @__PURE__ */ H('<button class="control-button svelte-2qd9r7"> </button>'), nl = /* @__PURE__ */ H('<button class="control-button svelte-2qd9r7">↺</button>'), al = /* @__PURE__ */ H('<button class="control-button svelte-2qd9r7"> </button>'), sl = /* @__PURE__ */ H('<div class="terminal-controls svelte-2qd9r7"><!> <!> <!></div>'), ll = /* @__PURE__ */ H('<div class="terminal-header svelte-2qd9r7"><!> <div class="terminal-title svelte-2qd9r7"> </div> <!></div>'), il = /* @__PURE__ */ H('<span class="tab-icon svelte-2qd9r7"> </span>'), ol = /* @__PURE__ */ H('<span class="tab-badge svelte-2qd9r7"> </span>'), ul = /* @__PURE__ */ H('<span class="tab-close svelte-2qd9r7" role="button" tabindex="0">×</span>'), fl = /* @__PURE__ */ H('<button><!> <span class="tab-title svelte-2qd9r7"> </span> <!> <!></button>'), cl = /* @__PURE__ */ H('<button class="terminal-tab tab-add svelte-2qd9r7">+</button>'), dl = /* @__PURE__ */ H('<div class="terminal-tabs svelte-2qd9r7"><!> <!></div>'), vl = (e, t) => {
  (e.key === "Enter" || e.key === " ") && t();
}, hl = /* @__PURE__ */ H('<span class="typing-cursor svelte-2qd9r7">▊</span>'), _l = /* @__PURE__ */ H('<div><pre class="svelte-2qd9r7"> <!></pre></div>'), pl = /* @__PURE__ */ H('<div class="terminal-cursor svelte-2qd9r7">▊</div>'), bl = /* @__PURE__ */ H('<span class="tab-icon svelte-2qd9r7"> </span>'), gl = /* @__PURE__ */ H('<span class="tab-badge svelte-2qd9r7"> </span>'), ml = /* @__PURE__ */ H('<span class="tab-close svelte-2qd9r7" role="button" tabindex="0">×</span>'), wl = /* @__PURE__ */ H('<button><!> <span class="tab-title svelte-2qd9r7"> </span> <!> <!></button>'), yl = /* @__PURE__ */ H('<button class="terminal-tab tab-add svelte-2qd9r7">+</button>'), $l = /* @__PURE__ */ H('<div class="terminal-tabs terminal-tabs-bottom svelte-2qd9r7"><!> <!></div>'), Tl = /* @__PURE__ */ H('<div class="terminal svelte-2qd9r7"><!> <!> <div class="terminal-content svelte-2qd9r7" role="button" aria-label="Terminal output - click to skip typing animation" tabindex="0"><!> <!></div> <!></div>');
const kl = {
  hash: "svelte-2qd9r7",
  code: `:host {display:block;font-family:'Cascadia Code', 'Fira Code', 'Monaco', 'Consolas', monospace;font-size:14px;line-height:1.5;}.terminal.svelte-2qd9r7 {width:100%;height:100%;min-height:300px;background:var(--terminal-bg);color:var(--terminal-fg);border:1px solid var(--terminal-border);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;transition:all 0.3s ease;}.terminal-header.svelte-2qd9r7 {background:var(--terminal-header-bg);color:var(--terminal-header-fg);padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--terminal-border);}.terminal-buttons.svelte-2qd9r7 {display:flex;gap:8px;}.terminal-button.svelte-2qd9r7 {width:12px;height:12px;border-radius:50%;display:inline-block;}.terminal-button.close.svelte-2qd9r7 {background:#ff5f56;}.terminal-button.minimize.svelte-2qd9r7 {background:#ffbd2e;}.terminal-button.maximize.svelte-2qd9r7 {background:#27c93f;}.terminal-title.svelte-2qd9r7 {flex:1;text-align:center;font-weight:500;}.terminal-controls.svelte-2qd9r7 {display:flex;gap:8px;}.control-button.svelte-2qd9r7 {background:transparent;color:var(--terminal-header-fg);border:1px solid var(--terminal-border);padding:4px 8px;border-radius:4px;cursor:pointer;font-size:12px;transition:all 0.2s;}.control-button.svelte-2qd9r7:hover:not(:disabled) {background:var(--terminal-border);color:var(--terminal-fg);}.control-button.svelte-2qd9r7:disabled {opacity:0.5;cursor:not-allowed;}.terminal-content.svelte-2qd9r7 {flex:1;padding:16px;overflow-y:auto;font-family:inherit;}.terminal-line.svelte-2qd9r7 {margin:4px 0;white-space:pre-wrap;word-break:break-word;}.terminal-line.svelte-2qd9r7 pre:where(.svelte-2qd9r7) {margin:0;font-family:inherit;}.step-command.svelte-2qd9r7 {color:var(--terminal-command);font-weight:bold;}.step-output.svelte-2qd9r7 {color:var(--terminal-output);}.step-error.svelte-2qd9r7 {color:var(--terminal-error);}.step-warning.svelte-2qd9r7 {color:var(--terminal-warning);}.step-info.svelte-2qd9r7 {color:var(--terminal-info);}.step-success.svelte-2qd9r7 {color:var(--terminal-success);}.terminal-cursor.svelte-2qd9r7 {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-2qd9r7-blink 1s infinite;}.typing-cursor.svelte-2qd9r7 {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-2qd9r7-blink 1s infinite;margin-left:2px;}

  @keyframes svelte-2qd9r7-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }.terminal-content.svelte-2qd9r7::-webkit-scrollbar {width:8px;}.terminal-content.svelte-2qd9r7::-webkit-scrollbar-track {background:var(--terminal-bg);}.terminal-content.svelte-2qd9r7::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:4px;}.terminal-content.svelte-2qd9r7::-webkit-scrollbar-thumb:hover {background:var(--terminal-header-fg);}

  /* Tab styles */.terminal-tabs.svelte-2qd9r7 {display:flex;background:var(--terminal-header-bg);border-bottom:1px solid var(--terminal-border);gap:4px;overflow-x:auto;align-items:center;}.terminal-tabs-bottom.svelte-2qd9r7 {border-bottom:none;border-top:1px solid var(--terminal-border);}.terminal-tab.svelte-2qd9r7 {display:flex;align-items:center;gap:6px;padding:8px 12px;background:transparent;color:var(--terminal-header-fg);border:none;border-top:2px solid transparent;cursor:pointer;font-family:inherit;font-size:13px;transition:all 0.2s;white-space:nowrap;position:relative;}.terminal-tabs-bottom.svelte-2qd9r7 .terminal-tab:where(.svelte-2qd9r7) {border-top:none;border-bottom:2px solid transparent;}.terminal-tab.svelte-2qd9r7:hover {background:rgba(255, 255, 255, 0.05);}.terminal-tab.active.svelte-2qd9r7 {background:var(--terminal-bg);border-top-color:var(--terminal-command);}.terminal-tabs-bottom.svelte-2qd9r7 .terminal-tab.active:where(.svelte-2qd9r7) {border-top-color:transparent;border-bottom-color:var(--terminal-command);}.tab-icon.svelte-2qd9r7 {font-size:14px;}.tab-title.svelte-2qd9r7 {flex:1;}.tab-badge.svelte-2qd9r7 {padding:2px 6px;background:var(--terminal-command);color:var(--terminal-bg);border-radius:10px;font-size:11px;font-weight:bold;min-width:18px;text-align:center;}.tab-close.svelte-2qd9r7 {margin-left:4px;padding:0 4px;background:transparent;border:none;color:var(--terminal-header-fg);cursor:pointer;font-size:18px;line-height:1;opacity:0.6;transition:opacity 0.2s;}.tab-close.svelte-2qd9r7:hover {opacity:1;color:var(--terminal-error);}.tab-add.svelte-2qd9r7 {padding:8px 16px;font-weight:bold;opacity:0.7;}.tab-add.svelte-2qd9r7:hover {opacity:1;background:rgba(255, 255, 255, 0.1);}

  /* Tab status indicators */.tab-status-running.svelte-2qd9r7 .tab-icon:where(.svelte-2qd9r7)::after {content:'●';color:var(--terminal-warning);position:absolute;top:6px;left:8px;font-size:8px;
    animation: svelte-2qd9r7-pulse 1.5s infinite;}.tab-status-error.svelte-2qd9r7 .tab-icon:where(.svelte-2qd9r7)::after {content:'●';color:var(--terminal-error);position:absolute;top:6px;left:8px;font-size:8px;}.tab-status-success.svelte-2qd9r7 .tab-icon:where(.svelte-2qd9r7)::after {content:'●';color:var(--terminal-success);position:absolute;top:6px;left:8px;font-size:8px;}

  @keyframes svelte-2qd9r7-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Scrollbar for tabs */.terminal-tabs.svelte-2qd9r7::-webkit-scrollbar {height:4px;}.terminal-tabs.svelte-2qd9r7::-webkit-scrollbar-track {background:transparent;}.terminal-tabs.svelte-2qd9r7::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:2px;}`
};
function El(e, t) {
  Bn(t, !0), js(e, kl);
  let r = te(t, "theme", 7, "dark"), n = te(t, "session", 23, () => []), a = te(t, "autoplay", 7, !1), s = te(t, "playbackSpeed", 7, 1), l = te(t, "showHeader", 7), o = te(t, "title", 7, "Terminal"), u = te(t, "colors", 23, () => ({})), c = te(t, "typingSpeed", 7, 40), _ = te(t, "enableTyping", 7, !0), b = te(t, "showPlayButton", 7), v = te(t, "showResetButton", 7), p = te(t, "showThemeToggle", 7), h = te(t, "showWindowButtons", 7), d = te(t, "tabs", 23, () => []), q = te(t, "activeTab", 7, 0), B = te(t, "showTabs", 7, !1), A = te(t, "allowTabClose", 7, !0), m = te(t, "allowTabAdd", 7, !1), C = te(t, "tabBarPosition", 7, "top"), y, ne, he = /* @__PURE__ */ D(Ue(q() || 0)), pe = /* @__PURE__ */ D(Ue(/* @__PURE__ */ new Map())), F = /* @__PURE__ */ Re(() => B() && d() && d().length > 0 ? d()[i(he)] || d()[0] : null), N = /* @__PURE__ */ Re(() => i(F) ? i(F).session : n()), tt = /* @__PURE__ */ Re(() => i(F) ? i(F).title : o()), rt = /* @__PURE__ */ D(!0), At = /* @__PURE__ */ D(!0), Nt = /* @__PURE__ */ D(!0), Rt = /* @__PURE__ */ D(!0), br = /* @__PURE__ */ D(!0), Bt = /* @__PURE__ */ D(!1), Qr = /* @__PURE__ */ Re(() => i(At)), en = /* @__PURE__ */ Re(() => i(Nt)), tn = /* @__PURE__ */ Re(() => i(Rt)), ya = /* @__PURE__ */ Re(() => i(br)), $a = /* @__PURE__ */ Re(() => i(Qr) || i(en) || i(tn)), Ta = /* @__PURE__ */ Re(() => i(rt)), Y = /* @__PURE__ */ D(0), U = /* @__PURE__ */ D(!1), G = /* @__PURE__ */ D(Ue([])), be = /* @__PURE__ */ D(-1), Ae = /* @__PURE__ */ D(""), It = /* @__PURE__ */ D(!1), gr = /* @__PURE__ */ D(!1), ue = null, se = null, rn = -1, Kt = "", nn = /* @__PURE__ */ Re(() => el(r() === "dark" ? Xs : Zs, u()));
  kr(() => {
    y && i(nn) && Qs(i(nn), y);
  }), kr(() => {
    const f = i(G).length;
    ne && f > 0 && Bs().then(() => {
      ne && (ne.scrollTop = ne.scrollHeight);
    });
  });
  function ht() {
    i(U) || !i(N) || i(Y) >= i(N).length || (w(U, !0), Ot());
  }
  function Ot() {
    if (!i(N) || i(Y) >= i(N).length) {
      w(U, !1), ue = null;
      return;
    }
    const f = i(N)[i(Y)], $ = (f.delay || 1e3) / s();
    ue = setTimeout(
      () => {
        if (!i(N)) {
          w(U, !1), ue = null;
          return;
        }
        f.type === "command" && _() && !f.skipTyping ? ka(f) : (w(G, [...i(G), f], !0), Zt(Y), i(Y) < i(N).length && i(U) ? Ot() : (w(U, !1), ue = null));
      },
      $
    );
  }
  function ka(f) {
    w(be, i(G).length, !0), w(Ae, ""), w(G, [...i(G), { ...f, content: "" }], !0);
    const $ = f.content;
    let I = 0;
    const J = 1e3 / (f.typingSpeed || c());
    function O() {
      if (!i(U)) {
        se = null;
        return;
      }
      if (I < $.length) {
        w(Ae, i(Ae) + $[I]), w(G, i(G).map((E, K) => K === i(be) ? { ...f, content: i(Ae) } : E), !0), I++;
        const g = J * 0.2, T = J + (Math.random() - 0.5) * g;
        se = setTimeout(O, T);
      } else
        w(be, -1), w(Ae, ""), se = null, Zt(Y), i(Y) < i(N).length && i(U) ? Ot() : w(U, !1);
    }
    O();
  }
  function Gt() {
    ue && (clearTimeout(ue), ue = null), se && (clearTimeout(se), se = null), w(Y, 0), w(G, [], !0), w(U, !1), w(be, -1), w(Ae, "");
  }
  function Ea() {
    if (i(U))
      w(U, !1), ue && (clearTimeout(ue), ue = null), se && (clearTimeout(se), se = null);
    else {
      if (!i(N) || i(N).length === 0)
        return;
      i(Y) >= i(N).length ? (Gt(), setTimeout(() => ht(), 10)) : ht();
    }
  }
  function xa(f) {
    return `step-${f}`;
  }
  function qa(f, $) {
    const I = f.prompt || "$";
    return f.type === "command" ? $ === i(be) ? `${I} ${i(Ae)}` : `${I} ${f.content}` : f.content;
  }
  function an() {
    i(be) >= 0 && i(be) < i(G).length && (se && (clearTimeout(se), se = null), w(
      G,
      i(G).map((f, $) => $ === i(be) ? {
        ...f,
        content: i(N)[i(Y)].content
      } : f),
      !0
    ), w(be, -1), w(Ae, ""), Zt(Y), i(Y) < i(N).length && i(U) ? Ot() : w(U, !1));
  }
  let mr = /* @__PURE__ */ D(!1), Dt = null, wr = null;
  kr(() => {
    var f, $, I, z;
    if (!i(mr) && y) {
      let J = function(g) {
        const T = [];
        let E = g;
        for (; E && T.length < 10; )
          T.push({
            tag: E.tagName,
            class: E.className,
            id: E.id
          }), E = E.parentElement;
        return T;
      };
      if (w(mr, !0), y) {
        const g = "terminal-" + Math.random().toString(36).substr(2, 9);
        let T = null, E = "none";
        const K = y.closest("terminal-session");
        K && (T = K, E = "closest()");
        let ye = y.parentElement;
        for (; ye && !T; ) {
          if (((f = ye.tagName) == null ? void 0 : f.toLowerCase()) === "terminal-session") {
            T = ye, E = "parentElement traversal";
            break;
          }
          ye = ye.parentElement;
        }
        if (!T) {
          const X = y.getRootNode();
          X && X.host && (($ = X.host.tagName) == null ? void 0 : $.toLowerCase()) === "terminal-session" && (T = X.host, E = "getRootNode().host");
        }
        if (!T) {
          const X = document.querySelectorAll("terminal-session");
          for (const $e of X)
            if ($e.contains(y)) {
              T = $e, E = "document.querySelectorAll + contains()";
              break;
            }
        }
        if (console.log(`[${g}] DOM Structure Analysis:`), console.log(`[${g}] Inner element:`, y.tagName, y.className), console.log(`[${g}] Parent chain:`, J(y)), console.log(`[${g}] Root node:`, (z = (I = y.getRootNode()) == null ? void 0 : I.constructor) == null ? void 0 : z.name), console.log(`[${g}] Host found via:`, E), console.log(`[${g}] Host element:`, T == null ? void 0 : T.tagName, T == null ? void 0 : T.id), T) {
          const X = T.getAttribute("show-header");
          w(rt, X === "false" ? !1 : l() ?? !0, !0);
          const $e = T.getAttribute("show-play-button");
          w(At, $e === "false" ? !1 : b() ?? !0, !0);
          const Ne = T.getAttribute("show-reset-button");
          w(Nt, Ne === "false" ? !1 : v() ?? !0, !0);
          const We = T.getAttribute("show-theme-toggle");
          w(Rt, We === "false" ? !1 : p() ?? !0, !0);
          const Ve = T.getAttribute("show-window-buttons");
          w(br, Ve === "false" ? !1 : h() ?? !0, !0);
          const Z = T.getAttribute("autoplay");
          w(Bt, Z === "true" || Z === "" ? !0 : a() ?? !1, !0), console.log(`[${g}] ✅ ATTRIBUTES FOUND:`), console.log(`[${g}] show-header="${X}" -> parsedShowHeader:`, i(rt)), console.log(`[${g}] show-play-button="${$e}" -> parsedShowPlayButton:`, i(At)), console.log(`[${g}] show-reset-button="${Ne}" -> parsedShowResetButton:`, i(Nt)), console.log(`[${g}] show-theme-toggle="${We}" -> parsedShowThemeToggle:`, i(Rt)), console.log(`[${g}] show-window-buttons="${Ve}" -> parsedShowWindowButtons:`, i(br)), console.log(`[${g}] autoplay="${Z}" -> parsedAutoplay:`, i(Bt));
        } else
          console.error(`[${g}] ❌ FAILED: Could not find host terminal-session element with any method!`), console.error(`[${g}] This suggests a fundamental issue with custom element structure.`);
      }
      if (B() && d() && d().length > 0) {
        const g = d()[i(he)] || d()[0];
        g && (Kt = g.id);
      }
      typeof IntersectionObserver < "u" && y && (Dt = new IntersectionObserver(
        (g) => {
          g.forEach((T) => {
            if (w(gr, T.isIntersecting, !0), T.isIntersecting && i(Bt) && !i(It) && !i(U)) {
              const E = i(N);
              E && E.length > 0 && i(Y) === 0 && (w(It, !0), setTimeout(() => ht(), 300));
            }
            !T.isIntersecting && i(U);
          });
        },
        { threshold: 0.1 }
        // Trigger when 10% visible
      ), Dt.observe(y));
      const O = () => {
        const g = i(N);
        !B() && g && g.length !== rn && (rn = g.length, (i(G).length > 0 || i(Y) > 0) && (Gt(), w(
          It,
          !1
          // Reset autoplay flag for new session
        )), i(Bt) && g.length > 0 && (i(gr) || !Dt) && (i(It) || (w(It, !0), setTimeout(() => ht(), 100)))), B() && i(F) && i(F).id !== Kt && !i(pe).has(i(F).id) && (Kt = i(F).id, i(Bt) && i(N) && i(N).length > 0 && setTimeout(() => ht(), 300));
      };
      O(), wr = setInterval(O, 500);
    }
    return () => {
      i(mr) && (wr !== null && clearInterval(wr), Dt && Dt.disconnect(), ue && clearTimeout(ue), se && clearTimeout(se));
    };
  });
  function Sa() {
    const f = r() === "dark" ? "light" : "dark";
    y == null || y.dispatchEvent(new CustomEvent("theme-change", { detail: f }));
  }
  function Pa() {
    i(F) && i(pe).set(i(F).id, {
      currentStepIndex: i(Y),
      isPlaying: i(U),
      displayedSteps: [...i(G)],
      typingStepIndex: i(be),
      typedContent: i(Ae),
      lastUpdateTime: Date.now()
    });
  }
  function Ca(f) {
    const $ = i(pe).get(f);
    if ($) {
      const I = Date.now() - $.lastUpdateTime;
      if (w(Y, $.currentStepIndex, !0), w(U, $.isPlaying, !0), w(G, [...$.displayedSteps], !0), w(be, $.typingStepIndex, !0), w(Ae, $.typedContent, !0), $.isPlaying && i(N) && i(Y) < i(N).length) {
        let z = i(Y), J = 0;
        for (; z < i(N).length && J < I; ) {
          const O = i(N)[z], g = (O.delay || 1e3) / s();
          if (J + g <= I)
            w(G, [...i(G), O], !0), z++, J += g;
          else
            break;
        }
        w(Y, z, !0), i(Y) < i(N).length ? Ot() : w(U, !1);
      }
    } else
      i(pe).has(f) || (Gt(), a() && i(gr) && i(N) && i(N).length > 0 && setTimeout(() => ht(), 300));
  }
  function yr(f) {
    if (f === i(he) || !d() || f < 0 || f >= d().length) return;
    Pa(), ue && (clearTimeout(ue), ue = null), se && (clearTimeout(se), se = null), w(he, f, !0);
    const $ = d()[f];
    $ && (Ca($.id), Kt = $.id), y == null || y.dispatchEvent(new CustomEvent("tab-change", { detail: { index: f, tab: $ } }));
  }
  function Jt(f) {
    if (!d() || d().length <= 1) return;
    const $ = d()[f];
    if ($.closable !== !1 && A())
      if ($ && i(pe).delete($.id), y == null || y.dispatchEvent(new CustomEvent("tab-close", { detail: { index: f, tab: $ } })), f === i(he)) {
        const z = f > 0 ? f - 1 : 0;
        d().length > 1 && yr(z);
      } else f < i(he) && Zt(he, -1);
  }
  function sn() {
    m() && (y == null || y.dispatchEvent(new CustomEvent("tab-add", { detail: {} })));
  }
  function ln(f) {
    return f ? `tab-status-${f}` : "";
  }
  var Xt = Tl(), on = ee(Xt);
  {
    var Aa = (f) => {
      var $ = ll(), I = ee($);
      {
        var z = (E) => {
          var K = tl();
          M(E, K);
        };
        ae(I, (E) => {
          i(ya) && E(z);
        });
      }
      var J = le(I, 2), O = ee(J, !0);
      Q(J);
      var g = le(J, 2);
      {
        var T = (E) => {
          var K = sl(), ye = ee(K);
          {
            var X = (Z) => {
              var x = rl();
              x.__click = Ea;
              var R = ee(x, !0);
              Q(x), qe(() => {
                x.disabled = !i(N) || i(N).length === 0, Be(R, i(U) ? "⏸" : "▶");
              }), M(Z, x);
            };
            ae(ye, (Z) => {
              i(Qr) && Z(X);
            });
          }
          var $e = le(ye, 2);
          {
            var Ne = (Z) => {
              var x = nl();
              x.__click = Gt, qe(() => x.disabled = i(G).length === 0), M(Z, x);
            };
            ae($e, (Z) => {
              i(en) && Z(Ne);
            });
          }
          var We = le($e, 2);
          {
            var Ve = (Z) => {
              var x = al();
              x.__click = Sa;
              var R = ee(x, !0);
              Q(x), qe(() => Be(R, r() === "dark" ? "☀" : "🌙")), M(Z, x);
            };
            ae(We, (Z) => {
              i(tn) && Z(Ve);
            });
          }
          Q(K), M(E, K);
        };
        ae(g, (E) => {
          i($a) && E(T);
        });
      }
      Q($), qe(() => Be(O, i(tt))), M(f, $);
    };
    ae(on, (f) => {
      i(Ta) && f(Aa);
    });
  }
  var un = le(on, 2);
  {
    var Na = (f) => {
      var $ = dl(), I = ee($);
      xr(I, 17, d, Er, (O, g, T) => {
        var E = fl();
        E.__click = () => yr(T);
        var K = ee(E);
        {
          var ye = (x) => {
            var R = il(), j = ee(R, !0);
            Q(R), qe(() => Be(j, i(g).icon)), M(x, R);
          };
          ae(K, (x) => {
            i(g).icon && x(ye);
          });
        }
        var X = le(K, 2), $e = ee(X, !0);
        Q(X);
        var Ne = le(X, 2);
        {
          var We = (x) => {
            var R = ol(), j = ee(R, !0);
            Q(R), qe(() => Be(j, i(g).badge)), M(x, R);
          };
          ae(Ne, (x) => {
            i(g).badge !== void 0 && x(We);
          });
        }
        var Ve = le(Ne, 2);
        {
          var Z = (x) => {
            var R = ul();
            R.__click = (j) => {
              j.stopPropagation(), Jt(T);
            }, R.__keydown = (j) => {
              (j.key === "Enter" || j.key === " ") && (j.stopPropagation(), j.preventDefault(), Jt(T));
            }, M(x, R);
          };
          ae(Ve, (x) => {
            i(g).closable !== !1 && A() && d().length > 1 && x(Z);
          });
        }
        Q(E), qe(
          (x) => {
            Sr(E, 1, `terminal-tab ${T === i(he) ? "active" : ""} ${x ?? ""}`, "svelte-2qd9r7"), Be($e, i(g).title);
          },
          [() => ln(i(g).status)]
        ), M(O, E);
      });
      var z = le(I, 2);
      {
        var J = (O) => {
          var g = cl();
          g.__click = sn, M(O, g);
        };
        ae(z, (O) => {
          m() && O(J);
        });
      }
      Q($), M(f, $);
    };
    ae(un, (f) => {
      B() && d() && d().length > 0 && C() === "top" && f(Na);
    });
  }
  var _t = le(un, 2);
  _t.__click = an, _t.__keydown = [vl, an];
  var fn = ee(_t);
  xr(fn, 17, () => i(G), Er, (f, $, I) => {
    var z = _l(), J = ee(z), O = ee(J, !0), g = le(O);
    {
      var T = (E) => {
        var K = hl();
        M(E, K);
      };
      ae(g, (E) => {
        I === i(be) && E(T);
      });
    }
    Q(J), Q(z), qe(
      (E, K) => {
        Sr(z, 1, `terminal-line ${E ?? ""}`, "svelte-2qd9r7"), Be(O, K);
      },
      [
        () => xa(i($).type),
        () => qa(i($), I)
      ]
    ), M(f, z);
  });
  var Ra = le(fn, 2);
  {
    var Ba = (f) => {
      var $ = pl();
      M(f, $);
    };
    ae(Ra, (f) => {
      i(U) && i(be) === -1 && f(Ba);
    });
  }
  Q(_t), $n(_t, (f) => ne = f, () => ne);
  var Ia = le(_t, 2);
  {
    var Oa = (f) => {
      var $ = $l(), I = ee($);
      xr(I, 17, d, Er, (O, g, T) => {
        var E = wl();
        E.__click = () => yr(T);
        var K = ee(E);
        {
          var ye = (x) => {
            var R = bl(), j = ee(R, !0);
            Q(R), qe(() => Be(j, i(g).icon)), M(x, R);
          };
          ae(K, (x) => {
            i(g).icon && x(ye);
          });
        }
        var X = le(K, 2), $e = ee(X, !0);
        Q(X);
        var Ne = le(X, 2);
        {
          var We = (x) => {
            var R = gl(), j = ee(R, !0);
            Q(R), qe(() => Be(j, i(g).badge)), M(x, R);
          };
          ae(Ne, (x) => {
            i(g).badge !== void 0 && x(We);
          });
        }
        var Ve = le(Ne, 2);
        {
          var Z = (x) => {
            var R = ml();
            R.__click = (j) => {
              j.stopPropagation(), Jt(T);
            }, R.__keydown = (j) => {
              (j.key === "Enter" || j.key === " ") && (j.stopPropagation(), j.preventDefault(), Jt(T));
            }, M(x, R);
          };
          ae(Ve, (x) => {
            i(g).closable !== !1 && A() && d().length > 1 && x(Z);
          });
        }
        Q(E), qe(
          (x) => {
            Sr(E, 1, `terminal-tab ${T === i(he) ? "active" : ""} ${x ?? ""}`, "svelte-2qd9r7"), Be($e, i(g).title);
          },
          [() => ln(i(g).status)]
        ), M(O, E);
      });
      var z = le(I, 2);
      {
        var J = (O) => {
          var g = yl();
          g.__click = sn, M(O, g);
        };
        ae(z, (O) => {
          m() && O(J);
        });
      }
      Q($), M(f, $);
    };
    ae(Ia, (f) => {
      B() && d() && d().length > 0 && C() === "bottom" && f(Oa);
    });
  }
  return Q(Xt), $n(Xt, (f) => y = f, () => y), M(e, Xt), In({
    get theme() {
      return r();
    },
    set theme(f = "dark") {
      r(f), W();
    },
    get session() {
      return n();
    },
    set session(f = []) {
      n(f), W();
    },
    get autoplay() {
      return a();
    },
    set autoplay(f = !1) {
      a(f), W();
    },
    get playbackSpeed() {
      return s();
    },
    set playbackSpeed(f = 1) {
      s(f), W();
    },
    get showHeader() {
      return l();
    },
    set showHeader(f) {
      l(f), W();
    },
    get title() {
      return o();
    },
    set title(f = "Terminal") {
      o(f), W();
    },
    get colors() {
      return u();
    },
    set colors(f = {}) {
      u(f), W();
    },
    get typingSpeed() {
      return c();
    },
    set typingSpeed(f = 40) {
      c(f), W();
    },
    get enableTyping() {
      return _();
    },
    set enableTyping(f = !0) {
      _(f), W();
    },
    get showPlayButton() {
      return b();
    },
    set showPlayButton(f) {
      b(f), W();
    },
    get showResetButton() {
      return v();
    },
    set showResetButton(f) {
      v(f), W();
    },
    get showThemeToggle() {
      return p();
    },
    set showThemeToggle(f) {
      p(f), W();
    },
    get showWindowButtons() {
      return h();
    },
    set showWindowButtons(f) {
      h(f), W();
    },
    get tabs() {
      return d();
    },
    set tabs(f = []) {
      d(f), W();
    },
    get activeTab() {
      return q();
    },
    set activeTab(f = 0) {
      q(f), W();
    },
    get showTabs() {
      return B();
    },
    set showTabs(f = !1) {
      B(f), W();
    },
    get allowTabClose() {
      return A();
    },
    set allowTabClose(f = !0) {
      A(f), W();
    },
    get allowTabAdd() {
      return m();
    },
    set allowTabAdd(f = !1) {
      m(f), W();
    },
    get tabBarPosition() {
      return C();
    },
    set tabBarPosition(f = "top") {
      C(f), W();
    }
  });
}
Os(["click", "keydown"]);
customElements.define("terminal-session", Js(
  El,
  {
    showPlayButton: { attribute: "show-play-button", type: "Boolean" },
    showResetButton: { attribute: "show-reset-button", type: "Boolean" },
    showThemeToggle: { attribute: "show-theme-toggle", type: "Boolean" },
    showWindowButtons: { attribute: "show-window-buttons", type: "Boolean" },
    showTabs: { attribute: "show-tabs", type: "Boolean" },
    allowTabClose: { attribute: "allow-tab-close", type: "Boolean" },
    allowTabAdd: { attribute: "allow-tab-add", type: "Boolean" },
    autoplay: { attribute: "autoplay", type: "Boolean" },
    enableTyping: { attribute: "enable-typing", type: "Boolean" },
    showHeader: { attribute: "show-header", type: "Boolean" },
    playbackSpeed: { attribute: "playback-speed", type: "Number" },
    typingSpeed: { attribute: "typing-speed", type: "Number" },
    activeTab: { attribute: "active-tab", type: "Number" },
    theme: { attribute: "theme" },
    title: { attribute: "title" },
    tabBarPosition: { attribute: "tab-bar-position" },
    session: {},
    colors: {},
    tabs: {}
  },
  [],
  [],
  !0
));
export {
  El as default
};
